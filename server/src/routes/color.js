import { Router } from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/color";
import { checkPermission } from "../middlewares/checkPermission";

const routerColor = Router();

routerColor.post("/", checkPermission, create);
routerColor.get("/", getAll);
routerColor.get("/:id", getDetail);
routerColor.put("/:id", checkPermission, update);
routerColor.delete("/:id", checkPermission, remove);

export default routerColor;
