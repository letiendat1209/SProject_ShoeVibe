import { Router } from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/collection";
import { checkPermission } from "../middlewares/checkPermission";

const routerCollection = Router();

routerCollection.post("/", checkPermission, create);
routerCollection.get("/", getAll);
routerCollection.get("/:id", getDetail);
routerCollection.put("/:id", checkPermission, update);
routerCollection.delete("/:id", checkPermission, remove);

export default routerCollection;
