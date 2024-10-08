import { Router } from "express";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/wishlist";

const routerWishlist = Router();

routerWishlist.get("/:userId", getWishlist);
routerWishlist.post("/", addToWishlist);
routerWishlist.delete("/:id", removeFromWishlist);

export default routerWishlist;
