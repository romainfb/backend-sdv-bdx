import * as commentRepository from "../repositories/comment.repository";

/**
 * Create a comment
 * @param {Object} commentData
 * @returns {Promise<Object>}
 * @async
 */

export const createComment = async (commentData) => {
  try {
    const newComment = await commentRepository.createComment(commentData);
    if (!newComment) throw new Error("Error creating comment");

    return newComment;
  } catch (error) {
    console.error("Error in createComment service:", error);
    throw error;
  }
};

/**
 * Get comments by article ID
 * @param {string} articleID
 * @returns {Promise<Object[]>}
 * @async
 */

export const getCommentsByArticleId = async (articleID) => {
  try {
    const comments = await commentRepository.findCommentsByArticleId(articleID);
    return comments;
  } catch (error) {
    console.error("Error in getCommentsByArticleId service:", error);
    throw error;
  }
};
