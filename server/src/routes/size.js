import { Router } from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/size";
import { checkPermission } from "../middlewares/checkPermission";

const routerSize = Router();

routerSize.post("/", checkPermission, create);
routerSize.get("/", getAll);
routerSize.get("/:id", getDetail);
routerSize.put("/:id", checkPermission, update);
routerSize.delete("/:id", checkPermission, remove);

export default routerSize;
