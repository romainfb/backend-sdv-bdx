import { Request, Response } from "express";
import * as userService from "../services/user.service";
import { sendErrorResponse, sendSuccessResponse } from "../utils/error.utils";

/**
 * Create a user
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser = await userService.createUser(user);
    sendSuccessResponse(201, "User created successfully", newUser, res);
  } catch (error) {
    sendErrorResponse(500, error.toString(), res);
  }
};
