import Order from "../models/Order";
import OrderDetail from "../models/OrderDetail";
import ProductVariant from "../models/ProductVariant";

export const createOrder = async (req, res) => {
  const { items, shippingAddress, coupon, points } = req.body;

  try {
    if (!items || items.length === 0) {
      return res.status(400).json({
        error: "No items in the order - Không mua đồ ấn thanh toán chi vậy",
      });
    }

    const totalAmount = calculateTotalAmount(items, points, coupon);

    const order = await Order.create({
      user_id: req.user?.id || null,
      total_amount: totalAmount,
      status: "pending",
      shipping_address: shippingAddress.address,
      payment_method: "Standard",
      payment_status: "unpaid",
    });
    if (!order) {
      throw new Error("Failed to create order");
    }

    console.log(`Order created with id: ${order.id}`);

    const orderDetailPromises = items.map(async (item) => {
      const productVariant = await ProductVariant.findOne({
        where: {
          product_id: item.product_id,
          color_id: item.color_id,
          size_id: item.size_id,
        },
      });

      if (!productVariant) {
        throw new Error(
          `Product variant not found for item: ${JSON.stringify(item)}`
        );
      }

      console.log(`Found product variant:`, productVariant.toJSON());

      if (!productVariant.id) {
        throw new Error(
          `Product variant ID not found for item: ${JSON.stringify(item)}`
        );
      }

      return OrderDetail.create({
        order_id: order.id,
        product_variant_id: productVariant.id,
        quantity: item.quantity,
        price: item.price,
      });
    });

    await Promise.all(orderDetailPromises);

    res
      .status(201)
      .json({ message: "Order created successfully", orderId: order.id });
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ error: "Failed to create order", details: error.message });
  }
};

const calculateTotalAmount = (items, points, coupon) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
