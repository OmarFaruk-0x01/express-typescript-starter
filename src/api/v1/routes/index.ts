import { Response, Router } from "express";

import UserRouter from "@routes/user.route";

const router = Router();
router.use(UserRouter);
router.get('/', (_,res: Response) => {
    res.send("Ok. API is working.")
    
})




export default router;
