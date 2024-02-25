import { ArticleModel } from "../databases/models/article.model";

/**
 * Create article in the database
 * @param {Object} articleData
 * @returns {Promise<Object>}
 * @async
 */

export const createArticle = async (articleData) => {
  try {
    const newArticle = await ArticleModel.create(articleData);
    return newArticle;
  } catch (error) {
    console.error("Error in createArticle repository:", error);
    throw error;
  }
};

/**
 * Get articles from the database
 * @param {number} limit
 * @param {string} country
 * @returns {Promise<Object[]>}
 * @async
 */

export const getArticles = async (limit?: number, country?: string) => {
  try {
    let query = ArticleModel.find();
    if (country) {
      query = query.where("country").equals(country);
    }
    if (limit) {
      query = query.limit(limit);
    }
    const articles = await query.exec();
    return articles;
  } catch (error) {
    console.error("Error in getArticles repository:", error);
    throw error;
  }
};

/**
 * Get article by ID from the database
 * @param {string} articleID
 * @returns {Promise<Object>}
 * @async
 */

export const getArticleByID = async (articleID: string) => {
  try {
    const article = await ArticleModel.findById(articleID).exec();
    return article;
  } catch (error) {
    console.error("Error in getArticleByID repository:", error);
    throw error;
  }
};

/**
 * Delete article by ID from the database
 * @param {string} articleID
 * @returns {Promise<Object>}
 * @async
 */

export const deleteArticleByID = async (articleID: string) => {
  try {
    const deletedArticle = await ArticleModel.findByIdAndDelete(
      articleID
    ).exec();
    return deletedArticle;
  } catch (error) {
    console.error("Error in deleteArticleByID repository:", error);
    throw error;
  }
};

/**
 * Edit article by ID in the database
 * @param {string} articleID
 * @param {Object} articleData
 * @returns {Promise<Object>}
 * @async
 */

export const editArticleByID = async (articleID: string, articleData) => {
  try {
    const editedArticle = await ArticleModel.findByIdAndUpdate(
      articleID,
      articleData,
      { new: true }
    ).exec();
    return editedArticle;
  } catch (error) {
    console.error("Error in editArticleByID repository:", error);
    throw error;
  }
};

/**
 * Get articles suggested by the same country
 * @param {string} articleID
 * @returns {Promise<Object[]>}
 * @async
 */

export const getArticlesSuggestedByID = async (articleID: string) => {
  try {
    const article = await ArticleModel.findById(articleID).exec();
    const articlesWithSameCountry = await ArticleModel.find({
      country: article.country,
    }).exec();
    return articlesWithSameCountry;
  } catch (error) {
    console.error("Error in getArticlesSuggestedByID repository:", error);
    throw error;
  }
};
