import mongoose from "mongoose";
import { ArticleSchema } from "../schemas/article.schema";

export const ArticleModel = mongoose.model("articles", ArticleSchema);
