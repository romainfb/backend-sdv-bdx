import { UserModel } from "../databases/models/user.model";

/**
 * Create a user
 * @param {Object} user
 * @returns {Promise<Object>}
 * @async
 */

export const createUser = async (user) => {
  console.log("createUserRepo", user);

  try {
    const newUser = await UserModel.create(user);
    console.log(newUser);

    return newUser;
  } catch (error) {
    throw error;
  }
};

/**
 * Find user by email
 * @param {string} email
 * @returns {Promise<Object>}
 * @async
 */

export const findUserByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};
