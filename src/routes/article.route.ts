import { Router } from "express";
import * as articleController from "../controllers/article.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  articleController.createArticle
);
router.get("/articles", articleController.getArticles);
router.get("/articles/suggest/:id", articleController.getArticlesSuggestedByID);
router.get("/articles/:id", articleController.getArticleByID);
router.delete(
  "/articles/delete/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  articleController.deleteArticleByID
);
router.put(
  "/articles/edit/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  articleController.editArticleByID
);

export default router;
