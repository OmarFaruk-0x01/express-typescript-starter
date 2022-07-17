import "module-alias/register";
import express, { NextFunction, Request, Response } from "express";
import { NotFound, HttpError } from "http-errors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/v1", require("./api/v1/routes/index.route"));

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFound());
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
