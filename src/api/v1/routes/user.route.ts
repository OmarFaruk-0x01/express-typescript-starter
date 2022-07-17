import { Router } from "express";
import { getAllUsersController } from "@controller/user.controller";

const router = Router();

router.get("/users", getAllUsersController);

export default router;
