import * as jwtUtils from "../utils/jwt.utils";
import * as userService from "./user.service";

/**
 * Login user
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>}
 * @async
 */

export const login = async (email, password) => {
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) throw new Error("User not found");

    const isPasswordCorrect = jwtUtils.comparePassword(password, user.password);
    if (!isPasswordCorrect) throw new Error("Incorrect password");

    const accessToken = jwtUtils.generateAccessToken({
      email: email,
      role: user.role,
    });
    const refreshToken = await jwtUtils.generateRefreshToken({
      email: email,
      role: user.role,
    });
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

/**
 * Logout user
 * @param {string} token
 * @returns {Promise<void>}
 * @async
 */

export const logout = async (token: string) => {
  try {
    // add token to blacklist
  } catch (error) {
    throw error;
  }
};
