import express from "express";
import {
  AddArticles,
  DeleteArticle,
  GetAllArticle,
  GetArticle,
  UpdateArticle,
} from "../controllers/arcticle.controller";
const router = express.Router();

router.use(express.json());

router.get("/articles", GetAllArticle);
router.get("/article/:id", GetArticle);
router.post("/articles", AddArticles);
router.patch("/articles/:id", UpdateArticle);
router.delete("/articles/:id", DeleteArticle);

module.exports = router;
