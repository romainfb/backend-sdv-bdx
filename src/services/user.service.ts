import * as userRepository from "../repositories/user.repository";
import * as jwtUtils from "../utils/jwt.utils";

/**
 * Create a user
 * @param {Object} user
 * @returns {Promise<Object>}
 * @async
 */

export const createUser = async (user) => {
  const isExistingUser = await userRepository.findUserByEmail(user.email);
  if (isExistingUser) throw new Error("User already exists");

  user.password = jwtUtils.hashPassword(user.password);
  try {
    const newUser = await userRepository.createUser(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<Object>}
 * @async
 */

export const getUserByEmail = async (email) => {
  try {
    const user = await userRepository.findUserByEmail(email);
    return user;
  } catch (error) {
    throw error;
  }
};

/**
 * Get role by email
 * @param {string} email
 * @returns {Promise<string>}
 * @async
 */

export const getRoleByEmail = async (email) => {
  try {
    const user = await userRepository.findUserByEmail(email);
    return user.role;
  } catch (error) {
    throw error;
  }
};
