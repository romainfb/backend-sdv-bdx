import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs/jwt.config";

/**
 * Generate access token for user authentication
 *
 * @param {Object} user
 * @returns {string}
 */

export const generateAccessToken = (user) => {
  return jwt.sign(user, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

/**
 * Generate refresh token for user authentication
 *
 * @param {Object} user
 * @returns {string}
 */

export const generateRefreshToken = async (user) => {
  return jwt.sign(user, jwtConfig.refreshSecret, {
    expiresIn: jwtConfig.refreshExpiresIn,
  });
};

/**
 * Decode access token
 *
 * @param {string} token
 * @returns {Object}
 */

export const decodeAccessToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, jwtConfig.secret);
    return decodedToken;
  } catch (error) {
    return null;
  }
};

/**
 * Decode refresh token
 *
 * @param {string} token
 * @returns {Object}
 */

export const decodeRefreshToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, jwtConfig.refreshSecret);
    return decodedToken;
  } catch (error) {
    return null;
  }
};

/**
 * Hash password
 *
 * @param {string} password
 * @returns {string}
 */

export const hashPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

/**
 * Compare password
 *
 * @param {string} password
 * @param {string} hashedPassword
 * @returns {boolean}
 */

export const comparePassword = (password, hashedPassword) => {
  const isPasswordCorrect = bcrypt.compareSync(password, hashedPassword);
  return isPasswordCorrect;
};
