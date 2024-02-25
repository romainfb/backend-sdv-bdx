import { Router } from "express";
import articleRoutes from "./article.route";
import authRoutes from "./auth.route";
import commentRoutes from "./comment.route";
import userRoutes from "./user.route";

const router = Router();

router.use("/v1/article", articleRoutes);
router.use("/v1/auth", authRoutes);
router.use("/v1/user", userRoutes);
router.use("/v1/comment", commentRoutes);

export default router;
