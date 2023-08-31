import express from "express";
import {
  // AddArticles,
  ArticlesContoller,
  // DeleteArticle,
  // GetAllArticle,
  // GetArticle,
  // UpdateArticle,
} from "../controllers/arcticle.controller";
const router = express.Router();

const ArticleController = new ArticlesContoller();

router.use(express.json());

router.get("/articles", ArticleController.getAllArticle);
router.get("/articles/:id", ArticleController.getArticle);
router.post("/articles", ArticleController.addArtice);
router.patch("/articles/:id", ArticleController.updateArticle);
router.delete("/articles/:id", ArticleController.deleteArticle);

module.exports = router;
