import { Request, Response } from "express";
import { getRoleByEmail } from "../services/user.service";
import { sendErrorResponse } from "../utils/error.utils";
import * as jwtUtils from "../utils/jwt.utils";

/**
 * Role middleware to verify the role of the user
 * and check if it is authorized to access the resource
 *
 * @param {string[]} roles
 * @returns {void}
 */

export const roleMiddleware = (roles: string[]) => {
  return async (req: Request, res: Response, next) => {
    try {
      const token = req.headers.authorization.replace("Bearer ", "");

      const decodedToken = jwtUtils.decodeAccessToken(token);

      const roleToken = JSON.parse(JSON.stringify(decodedToken)).role;
      const emailToken = JSON.parse(JSON.stringify(decodedToken)).email;

      if ((await getRoleByEmail(emailToken)) !== roleToken) {
        return sendErrorResponse(
          403,
          "Unauthorized, you don't have access to this route",
          res
        );
      }

      if (!roles.includes(roleToken)) {
        sendErrorResponse(
          403,
          "Unauthorized, you don't have access to this route",
          res
        );
      }

      next();
    } catch (error) {
      sendErrorResponse(500, "Error during authentification", res);
    }
  };
};
