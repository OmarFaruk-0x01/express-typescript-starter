import { Router } from "express";
import UserRouter from "@routes/user.route";
const router = Router();

router.use(UserRouter);

module.exports = router;
