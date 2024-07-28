import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getAllOrdersByPaymentStatus,
  getOrderDetails,
  updateOrderPaymentStatus,
  updateOrderStatus,
} from "../controllers/order";

const routerOrder = Router();

routerOrder.post("/", createOrder);
routerOrder.get("/", getAllOrder);
routerOrder.get("/:orderId", getOrderDetails);
routerOrder.put("/:orderId/status", updateOrderStatus);
routerOrder.put("/:orderId/payment-status", updateOrderPaymentStatus);
routerOrder.delete("/:orderId", deleteOrder);
routerOrder.get("/payment-status/:paymentStatus", getAllOrdersByPaymentStatus);

export default routerOrder;
