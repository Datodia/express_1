import { Request, Response } from "express";
import { Article } from "../models/article.model";

let arr: Article[] = [];
let id: number = 0;

export class ArticlesService {
  getAllArticles(): Array<Article> {
    return arr;
  }

  getArticleById(req: Request): Article | undefined {
    const id = JSON.parse(req.params.id);
    const article = arr.find((el: Article) => el.id == id);

    return article;
  }

  AddArticle(req: Request): Array<Article> {
    const articlesData = req.body;
    id++;
    arr.push({ id: id, name: articlesData.name });

    return arr;
  }

  editArticle(req: Request): Article | undefined {
    const id = parseInt(req.params.id);

    const article = arr.find((el: Article) => el.id === id);

    return article;
  }

  deleteArticle(req: Request) {
    const id = parseInt(req.params.id);
    arr = arr.filter((el: Article) => el.id !== id);
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
