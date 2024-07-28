import Order from "../models/Order";
import OrderDetail from "../models/OrderDetail";
import ProductVariant from "../models/ProductVariant";
import ProductColor from "../models/ProductColor";
import ProductSize from "../models/ProductSize";
import Product from "../models/Product";
import ProductImages from "../models/ProductImages";

const calculateTotalAmount = (items, points, coupon) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
export const createOrder = async (req, res) => {
  const { items, user_id, shippingAddress, coupon, points } = req.body;
  try {
    if (!items || items.length === 0) {
      return res.status(400).json({
        error: "No items in the order - Không mua đồ ấn thanh toán chi vậy",
      });
    }

    const totalAmount = calculateTotalAmount(items, points, coupon);

    const order = await Order.create({
      user_id: user_id || null,
      total_amount: totalAmount,
      status: "pending",
      shipping_address: JSON.stringify(shippingAddress),
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
export const getAllOrder = async (req, res) => {
  try {
    const data = await Order.findAll(req.body);
    if (!data) {
      throw new Error("Failed !");
    }
    return res.status(200).json({
      message: "Get all Orders successfully",
      data,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
export const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOne({
      where: { id: orderId },
      attributes: [
        "id",
        "shipping_address",
        "total_amount",
        "created_at",
        "shipping_address",
      ],
      include: [
        {
          model: OrderDetail,
          as: "orderDetails",
          include: [
            {
              model: ProductVariant,
              include: [
                {
                  model: Product,
                  attributes: ["id", "name"],
                  include: [
                    {
                      model: ProductImages,
                      attributes: ["image_url"],
                      where: { is_main: true },
                    },
                  ],
                },
                { model: ProductColor, attributes: ["color_name"] },
                { model: ProductSize, attributes: ["size_value"] },
              ],
            },
          ],
        },
      ],
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Transform the data to a more readable format
    const formattedOrder = {
      id: order.id, // id của order
      userId: order.user_id,
      totalAmount: order.total_amount,
      status: order.status,
      shippingAddress: order.shipping_address,
      paymentMethod: order.payment_method,
      paymentStatus: order.payment_status,
      createdAt: order.created_at,
      updatedAt: order.updated_at,
      items: order.orderDetails.map((detail) => ({
        id: detail.id,
        quantity: detail.quantity,
        price: detail.price,
        product: detail.ProductVariant
          ? {
              id: detail.ProductVariant.Product?.id,
              name: detail.ProductVariant.Product?.name,
              description: detail.ProductVariant.Product?.des,
              color: detail.ProductVariant.ProductColor?.color_name,
              size: detail.ProductVariant.ProductSize?.size_value,
              image:
                detail.ProductVariant.Product?.ProductImages[0]?.image_url ||
                null,
            }
          : null,
      })),
    };

    return res.status(200).json({
      message: "Order details retrieved successfully",
      order: formattedOrder,
    });
  } catch (error) {
    console.error("Error fetching order details:", error);
    return res.status(500).json({
      error: "Failed to retrieve order details",
      details: error.message,
    });
  }
};
export const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  // Các trạng thái hợp lệ của đơn hàng
  const validStatuses = [
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ];

  // Kiểm tra xem trạng thái có hợp lệ không
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      error: "Invalid order status",
    });
  }

  try {
    // Tìm kiếm đơn hàng theo ID
    const order = await Order.findOne({ where: { id: orderId } });

    // Nếu không tìm thấy đơn hàng
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Cập nhật trạng thái đơn hàng
    order.status = status;
    await order.save();

    return res.status(200).json({
      message: "Order status updated successfully",
      order: {
        id: order.id,
        status: order.status,
      },
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return res.status(500).json({
      error: "Failed to update order status",
      details: error.message,
    });
  }
};
export const updateOrderPaymentStatus = async (req, res) => {
  const { orderId } = req.params;
  const { payment_status } = req.body;

  const validPaymentStatuses = ["paid", "unpaid"];

  if (!validPaymentStatuses.includes(payment_status)) {
    return res.status(400).json({
      error: "Invalid payment status",
    });
  }

  try {
    const order = await Order.findOne({ where: { id: orderId } });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.payment_status = payment_status;
    await order.save();

    return res.status(200).json({
      message: "Order payment status updated successfully",
      order: {
        id: order.id,
        payment_status: order.payment_status,
      },
    });
  } catch (error) {
    console.error("Error updating order payment status:", error);
    return res.status(500).json({
      error: "Failed to update order payment status",
      details: error.message,
    });
  }
};
export const deleteOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    // Tìm đơn hàng
    const order = await Order.findOne({ where: { id: orderId } });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Xóa các chi tiết đơn hàng liên quan
    await OrderDetail.destroy({ where: { order_id: orderId } });

    // Xóa đơn hàng
    await order.destroy();

    return res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).json({
      error: "Failed to delete order",
      details: error.message,
    });
  }
};
export const getAllOrdersByPaymentStatus = async (req, res) => {
  const { paymentStatus } = req.params;

  try {
    // Tìm tất cả đơn hàng với trạng thái thanh toán tương ứng
    const orders = await Order.findAll({
      where: { payment_status: paymentStatus },
      attributes: [
        "id",
        "user_id",
        "total_amount",
        "status",
        "shipping_address",
        "payment_method",
        "payment_status",
        "created_at",
        "updated_at",
      ],
    });

    // Kiểm tra nếu không có đơn hàng nào được tìm thấy
    if (orders.length === 0) {
      return res
        .status(404)
        .json({ error: "No orders found for the given payment status" });
    }

    return res.status(200).json({
      message: "Orders retrieved successfully",
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders by payment status:", error);
    return res.status(500).json({
      error: "Failed to retrieve orders by payment status",
      details: error.message,
    });
  }
};
