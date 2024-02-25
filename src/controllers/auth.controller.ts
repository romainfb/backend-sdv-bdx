import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { sendErrorResponse, sendSuccessResponse } from "../utils/error.utils";

/**
 * Login user
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.login(email, password);
    sendSuccessResponse(200, "User logged in successfully", user, res);
  } catch (error) {
    sendErrorResponse(500, error.toString(), res);
  }
};

/**
 * Logout user
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const logout = async (req: Request, res: Response) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  if (!token) return sendErrorResponse(401, "You don't have any token", res);

  try {
    await authService.logout(token);
    sendSuccessResponse(200, "User logged out successfully", null, res);
  } catch (error) {
    sendErrorResponse(500, error.toString(), res);
  }
};
