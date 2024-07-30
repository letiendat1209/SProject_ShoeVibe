import { Router } from "express";
import { create, getAllUsers, getDetail, remove, update } from "../controllers/user";

const routerUser = Router();

routerUser.post("/", create);
routerUser.get("/", getAllUsers);
routerUser.get("/:id", getDetail);
routerUser.put("/:id", update);
routerUser.delete("/:id", remove);



export default routerUser;