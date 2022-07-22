import { GetAllUsersResponseObjType } from "@interfaces/user.interface";
import { getAllUsersService } from "@services/user.service";
import { NextFunction, Request, Response } from "express";

const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response: GetAllUsersResponseObjType = {
    status: 200,
    message: "",
    data: [],
  };
  const { error, users } = await getAllUsersService();
  if (Boolean(error)) {
    return next(error);
  }
  response["message"] = "Successfully fetch all users.";
  response.data = users;
  return res.send(response);
};
const getUserByIdController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
const updateUserByIdController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
const deleteUserByIdController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export {
  getAllUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
};
