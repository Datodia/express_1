import { Request, Response } from "express";
import { Article } from "../models/article.model";

let articles: Article[] = [];
let id: number = 0;

export class ArticlesService {
  getAllArticles(): Array<Article> {
    return articles;
  }

  getArticleById(id: number): Article | undefined {
    const article = articles.find((el: Article) => el.id === id);

    return article;
  }

  AddArticle(name: string): Array<Article> {
    id++;
    const article = new Article(id, name);

    articles.push(article);

    return articles;
  }

  editArticle(id: number, name: string): Article | undefined {
    const article = articles.find((el: Article) => el.id === id);

    if (!article) {
      throw new Error(`Article has not found by id - ${id}`);
    }

    article.name = name;

    return article;
  }

  deleteArticle(id: number) {
    articles = articles.filter((el: Article) => el.id !== id);

    return articles;
  }
}
// export const getAllAtricles = () => {
//   return arr;
// };

// export const getArtileById = (req: Request) => {
//   const id = JSON.parse(req.params.id);
//   const article = arr.find((el: Article) => el.id == id);

//   return article;
// };

// export const AddArticle = (req: Request) => {
//   const articlesData = req.body;
//   id++;
//   arr.push({ id: id, name: articlesData.name });

//   return arr;
// };

// export const editArticle = (req: Request) => {
//   const id = parseInt(req.params.id);

//   const article = arr.find((el: Article) => el.id === id);

//   return article;
// };

// export const deleteArticle = (req: Request) => {
//   const id = parseInt(req.params.id);

//   arr = arr.filter((el: Article) => el.id !== id);
// };
