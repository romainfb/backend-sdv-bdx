import { Router } from "express";
import * as commentController from "../controllers/comment.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin", "user"]),
  commentController.createComment
);
router.get("/comments/:articleID", commentController.getCommentsByArticleId);

export default router;
