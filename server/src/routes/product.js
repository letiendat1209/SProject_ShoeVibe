import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
  getProductsByCategory,
  remove,
  getProductsByCollection,
} from "../controllers/product";

const routerProduct = Router();

routerProduct.post("/", createProduct);
routerProduct.get("/", getAllProduct);
routerProduct.get("/:id", getDetailProduct);
routerProduct.put("/:id", updateProduct);
routerProduct.delete("/:id", remove);
routerProduct.get("/category/:categoryId", getProductsByCategory);
routerProduct.get("/collection/:collectionId", getProductsByCollection);


export default routerProduct;
