import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
} from "../controllers/Cart";

const routerCart = express.Router();

routerCart.post("/add", addToCart);
routerCart.get("/", getCart);
routerCart.delete("/remove", removeFromCart);
routerCart.delete("/clear", clearCart);

export default routerCart;
