import { Router } from "express";
import { changePassword, create, getAllUsers, getDetail, remove, update } from "../controllers/user";
import { checkPermission } from "../middlewares/checkPermission";

const routerUser = Router();

routerUser.post("/", create);
routerUser.get("/", getAllUsers);
routerUser.get("/:id", getDetail);
routerUser.put("/:id", update);
routerUser.put("/change-password",checkPermission, changePassword);
routerUser.delete("/:id", remove);



export default routerUser;