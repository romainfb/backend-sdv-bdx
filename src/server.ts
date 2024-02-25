import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index";

import * as articleController from "./controllers/article.controller";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.get("/", articleController.createArticle);

mongoose
  .connect("PATH_TO_YOUR_MONGODB_DATABASE")
  .then(() => {
    console.log("L'accès à MongoDB a été établi avec succès !");
    app.listen(port, () => {
      console.log(`Le serveur est accessible sur le port ${port}`);
    });
  })
  .catch(() => {
    console.log("L'accès à MongoDB a échoué !");
  });
