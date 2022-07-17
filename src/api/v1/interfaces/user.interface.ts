import { User } from "@prisma/client";
import { HttpError } from "http-errors";
import { ResponseObj } from "@interfaces/.";

export interface GetAllUsersResponseObjType extends ResponseObj<User> {}

export interface GetAllUsersServicesReturnType {
  error: HttpError | null;
  users: User[];
}
