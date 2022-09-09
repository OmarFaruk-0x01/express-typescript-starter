import "module-alias/register";

import express, { NextFunction, Request, Response } from "express";
import { NotFound, HttpError } from "http-errors";
import http from "http";
import { Server } from "socket.io";
import morgan from "morgan";
import dotenv from "dotenv";
import rootRouter from "@routes";
import registerSocketEvents from "@socks";
// Load .env file
dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable logger
app.use(morgan("dev"));

// Load Root Router of this server
app.use("/api/v1", rootRouter);

// Handel wrong route
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFound());
});

// Handel errors / server crashes
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

//Load Socket Events
registerSocketEvents(io);




const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
