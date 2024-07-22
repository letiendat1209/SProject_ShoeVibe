import { Router } from "express";
import routerProduct from "./product";
import routerCategory from "./category";
import routerAuth from "./auth";
import routerSize from "./size";
import routerColor from "./color";
import routerCart from "./cart";

const initRoutes = Router();

initRoutes.use("/product", routerProduct);
initRoutes.use("/category", routerCategory);
initRoutes.use("/auth", routerAuth);
initRoutes.use("/size", routerSize);
initRoutes.use("/color", routerColor);
initRoutes.use("/cart", routerCart);

export default initRoutes;
