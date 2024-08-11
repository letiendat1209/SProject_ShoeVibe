import { Router } from "express";
import { deleteVariantById, updateVariantById } from "../controllers/variant";

const routerVariant = Router();

routerVariant.delete("/variants/:id", deleteVariantById);
routerVariant.get("/", updateVariantById);

export default routerUser;
