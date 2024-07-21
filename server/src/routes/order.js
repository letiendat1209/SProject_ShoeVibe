import { Router } from "express";
import { createOrder } from "../controllers/order";

const routerOrder = Router();

routerOrder.post("/", createOrder);

export default routerOrder;
