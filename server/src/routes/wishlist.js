import { Router } from "express";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/wishlist";

const routerWishlist = Router();

routerWishlist.get("/", getWishlist);
routerWishlist.post("/", addToWishlist);
routerWishlist.delete("/:id", removeFromWishlist);

export default routerWishlist;
