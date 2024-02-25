import { Request, Response } from "express";
import * as commentService from "../services/comment.service";
import { sendErrorResponse, sendSuccessResponse } from "../utils/error.utils";

/**
 * Create a comment
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const createComment = async (req: Request, res: Response) => {
  const commentData = req.body;
  try {
    const newComment = await commentService.createComment(commentData);
    sendSuccessResponse(201, "Comment created successfully", newComment, res);
  } catch (error) {
    console.error("Error creating comment:", error);
    sendErrorResponse(500, error.toString(), res);
  }
};

/**
 * Get comments by article ID
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const getCommentsByArticleId = async (req: Request, res: Response) => {
  const articleID = req.params.articleID;
  try {
    const comments = await commentService.getCommentsByArticleId(articleID);
    sendSuccessResponse(200, "Comments retrieved successfully", comments, res);
  } catch (error) {
    console.error("Error getting comments:", error);
    sendErrorResponse(500, error.toString(), res);
  }
};
