import express from "express";
import { ArticlesContoller } from "../controllers/arcticle.controller";

const articleController = new ArticlesContoller();

export const articlesRouter = express.Router();

articlesRouter.get("/articles", (req, res) => {
  articleController.getAllArticle(req, res);
});
articlesRouter.get("/articles/:id", (req, res) => {
  return articleController.getArticle(req, res);
});
articlesRouter.post("/articles", (req, res) => {
  return articleController.addArtice(req, res);
});
articlesRouter.patch("/articles/:id", (req, res) => {
  return articleController.updateArticle(req, res);
});
articlesRouter.delete("/articles/:id", (req, res) => {
  return articleController.deleteArticle(req, res);
});
