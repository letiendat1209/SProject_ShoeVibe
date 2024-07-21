import Order from "../models/Order";
import OrderDetail from "../models/OrderDetail";
import ProductVariant from "../models/ProductVariant";

// Tạo đơn hàng
export const createOrder = async (req, res) => {
  try {
    const { user_id, cartItems, shipping_address, payment_method } = req.body;

    // Tính tổng giá trị đơn hàng
    const total_amount = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    // Tạo đơn hàng mới
    const newOrder = await Order.create({
      user_id,
      total_amount,
      status: "pending",
      shipping_address,
      payment_method,
      payment_status: "unpaid",
    });

    // Tạo chi tiết đơn hàng
    await Promise.all(
      cartItems.map(async (item) => {
        await OrderDetail.create({
          order_id: newOrder.id,
          product_variant_id: item.id,
          quantity: item.quantity,
          price: item.price,
        });

        // Cập nhật số lượng sản phẩm
        const productVariant = await ProductVariant.findByPk(item.id);
        productVariant.quantity -= item.quantity;
        await productVariant.save();
      })
    );

    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error });
  }
};
