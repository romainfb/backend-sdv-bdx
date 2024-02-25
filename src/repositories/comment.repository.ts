import { CommentModel } from "../databases/models/comment.model";

/**
 * Create comment in the database
 * @param {Object} commentData
 * @returns {Promise<Object>}
 * @async
 */

export const createComment = async (commentData) => {
  try {
    const newComment = await CommentModel.create(commentData);
    return newComment;
  } catch (error) {
    console.error("Error in createComment repository:", error);
    throw error;
  }
};

/**
 * Get comments from the database
 * @param {number} limit
 * @param {string} articleID
 * @returns {Promise<Object[]>}
 * @async
 */

export const findCommentsByArticleId = async (articleID) => {
  try {
    const comments = await CommentModel.find({ articleID }).exec();
    return comments;
  } catch (error) {
    console.error("Error in findCommentsByArticleId repository:", error);
    throw error;
  }
};
