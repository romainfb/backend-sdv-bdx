import { Request, Response } from "express";
import * as articleService from "../services/article.service";
import { sendErrorResponse, sendSuccessResponse } from "../utils/error.utils";

/**
 * Create an article
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const createArticle = async (req: Request, res: Response) => {
  const articleData = req.body;
  try {
    const newArticle = await articleService.createArticle(articleData);
    sendSuccessResponse(201, "Article created successfully", newArticle, res);
  } catch (error) {
    console.error("Error creating article:", error);
    sendErrorResponse(500, error.toString(), res);
  }
};

/**
 * Get articles
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const getArticles = async (req: Request, res: Response) => {
  const limit = req.query.limit
    ? parseInt(req.query.limit as string)
    : undefined;
  const country = req.query.country ? (req.query.country as string) : undefined;
  try {
    const articles = await articleService.getArticles(limit, country);
    sendSuccessResponse(200, "Articles retrieved successfully", articles, res);
  } catch (error) {
    sendErrorResponse(500, error.toString(), res);
    console.error("Error getting articles:", error);
  }
};

/**
 * Get article by ID
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const getArticleByID = async (req: Request, res: Response) => {
  const articleID = req.params.id;
  try {
    const article = await articleService.getArticleByID(articleID);
    if (!article) {
      sendErrorResponse(404, "Article not found", res);
      return;
    }
    sendSuccessResponse(200, "Article retrieved successfully", article, res);
  } catch (error) {
    console.error("Error getting article by ID:", error);
    sendErrorResponse(500, error.toString(), res);
  }
};

/**
 * Delete article by ID
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const deleteArticleByID = async (req: Request, res: Response) => {
  const articleID = req.params.id;
  try {
    const deletedArticle = await articleService.deleteArticleByID(articleID);
    if (!deletedArticle) {
      return sendErrorResponse(404, "Article not found", res);
    }
    sendSuccessResponse(
      200,
      "Article deleted successfully",
      deletedArticle,
      res
    );
  } catch (error) {
    console.error("Error deleting article:", error);
    sendErrorResponse(500, error.toString(), res);
  }
};

/**
 * Edit article by ID
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const editArticleByID = async (req: Request, res: Response) => {
  const articleID = req.params.id;
  const articleData = req.body;

  try {
    const editedArticle = await articleService.editArticleByID(
      articleID,
      articleData
    );
    if (!editedArticle) {
      return sendErrorResponse(404, "Article not found", res);
    }
    sendSuccessResponse(200, "Article edited successfully", editedArticle, res);
  } catch (error) {
    console.error("Error editing article:", error);
    sendErrorResponse(500, error.toString(), res);
  }
};

/**
 * Get articles suggested by ID of an article using the country of the article
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 * @async
 */

export const getArticlesSuggestedByID = async (req: Request, res: Response) => {
  const articleID = req.params.id;
  try {
    const articlesWithSameCountry =
      await articleService.getArticlesSuggestedByID(articleID);

    sendSuccessResponse(
      200,
      "Articles suggested retrieved successfully",
      articlesWithSameCountry,
      res
    );
  } catch (error) {
    console.error("Error getting articles with same country:", error);
    sendErrorResponse(500, error.toString(), res);
  }
};
