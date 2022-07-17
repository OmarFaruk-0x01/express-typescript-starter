import db from "@config/prisma.config";
import { GetAllUsersServicesReturnType } from "@interfaces/user.interface";
import { HttpError, NotFound } from "http-errors";

const getAllUsersService: () => Promise<GetAllUsersServicesReturnType> =
  async () => {
    let error: HttpError | null = null;
    const users = await db.user.findMany();
    if (users.length == 0) {
      error = new NotFound("Users Not Found");
    }
    return { error, users };
  };

export { getAllUsersService };
