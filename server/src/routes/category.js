import { Router } from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const routerCategory = Router();

routerCategory.post("/", checkPermission, create);
routerCategory.get("/", getAll);
routerCategory.get("/:id", getDetail);
routerCategory.put("/:id", checkPermission, update);
routerCategory.delete("/:id", checkPermission, remove);

export default routerCategory;
