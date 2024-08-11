import { Router } from "express";
import routerProduct from "./product";
import routerCategory from "./category";
import routerAuth from "./auth";
import routerSize from "./size";
import routerColor from "./color";
import routerCart from "./cart";
import routerOrder from "./order";
import routerUser from "./user";
import routerWishlist from "./wishlist";
import routerCollection from "./collection";

const initRoutes = Router();

initRoutes.use("/product", routerProduct);
initRoutes.use("/category", routerCategory);
initRoutes.use("/collection", routerCollection);
initRoutes.use("/auth", routerAuth);
initRoutes.use("/size", routerSize);
initRoutes.use("/color", routerColor);
initRoutes.use("/cart", routerCart);
initRoutes.use("/orders", routerOrder);
initRoutes.use("/users", routerUser);
initRoutes.use("/wishlist", routerWishlist);

export default initRoutes;
