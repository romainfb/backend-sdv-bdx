import * as articleRepository from "../repositories/article.respository";

/**
 * Create article
 * @param {Object} articleData
 * @returns {Promise<Object>}
 * @async
 */

export const createArticle = async (articleData) => {
  try {
    const newArticle = await articleRepository.createArticle(articleData);
    if (!newArticle) throw new Error("Error creating article");

    return newArticle;
  } catch (error) {
    console.error("Error in createArticle service:", error);
    throw error;
  }
};

/**
 * Get articles
 * @param {number} limit
 * @param {string} country
 * @returns {Promise<Object[]>}
 * @async
 */

export const getArticles = async (limit?: number, country?: string) => {
  try {
    const articles = await articleRepository.getArticles(limit, country);
    return articles;
  } catch (error) {
    console.error("Error in getArticles service:", error);
    throw error;
  }
};

/**
 * Get article by ID
 * @param {string} articleID
 * @returns {Promise<Object>}
 * @async
 */

export const getArticleByID = async (articleID: string) => {
  try {
    const article = await articleRepository.getArticleByID(articleID);
    return article;
  } catch (error) {
    console.error("Error in getArticleByID service:", error);
    throw error;
  }
};

/**
 * Delete article by ID
 * @param {string} articleID
 * @returns {Promise<Object>}
 * @async
 */

export const deleteArticleByID = async (articleID: string) => {
  try {
    const deletedArticle = await articleRepository.deleteArticleByID(articleID);
    return deletedArticle;
  } catch (error) {
    console.error("Error in deleteArticleByID service:", error);
    throw error;
  }
};

/**
 * Edit article by ID
 * @param {string} articleID
 * @param {Object} articleData
 * @returns {Promise<Object>}
 * @async
 */

export const editArticleByID = async (articleID: string, articleData) => {
  try {
    const editedArticle = await articleRepository.editArticleByID(
      articleID,
      articleData
    );
    return editedArticle;
  } catch (error) {
    console.error("Error in editArticleByID service:", error);
    throw error;
  }
};

/**
 * Get articles suggested by article ID using the country of the article
 * @param {string} articleID
 * @returns {Promise<Object[]>}
 * @async
 */

export const getArticlesSuggestedByID = async (articleID: string) => {
  try {
    const article = await articleRepository.getArticleByID(articleID);
    if (!article) throw new Error("Article not found");

    const articles = await articleRepository.getArticles(
      undefined,
      article.country
    );

    if (!articles) throw new Error("There are no suggested articles");

    return articles;
  } catch (error) {
    console.error("Error in getArticlesSuggestedByID service:", error);
    throw error;
  }
};
