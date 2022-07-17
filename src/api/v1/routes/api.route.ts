import { NextFunction, Request, Response } from "express";

const router = require("express").Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Ok api is working 🚀" });
});

module.exports = router;
