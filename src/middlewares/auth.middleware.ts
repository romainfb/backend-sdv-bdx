import { Request, Response } from "express";
import { sendErrorResponse } from "../utils/error.utils";
import * as jwtUtils from "../utils/jwt.utils";

/**
 * Authentication middleware to verify the token and decode it
 * and add the user to the request object
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {void}
 */

export const authMiddleware = (req: Request, res: Response, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    if (!token)
      return sendErrorResponse(400, "This route needs an access token", res);

    const decodedToken = jwtUtils.decodeAccessToken(token);
    if (!decodedToken)
      return sendErrorResponse(400, "Provided token is invalid", res);

    req.user = decodedToken;

    next();
  } catch (error) {
    return sendErrorResponse(500, "Error during authentification", res);
  }
};
