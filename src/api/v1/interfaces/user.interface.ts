import { user } from "@prisma/client";
import { HttpError } from "http-errors";
import { ResponseObj } from "@interfaces/.";
 
export interface GetAllUsersResponseObjType extends ResponseObj<user> {}

export interface GetAllUsersServicesReturnType {
  error: HttpError | null;
  users: user[]; 
}
