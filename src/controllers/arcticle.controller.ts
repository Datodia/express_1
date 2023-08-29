import { Request, Response } from "express";
import {
  AddArticle,
  deleteArticle,
  editArticle,
  getArtileById,
} from "../services/article.service";

export type Article = {
  id: number;
  name: string;
};

let arr: Article[] = [];
let id: number = 0;

export const GetAllArticle = (req: Request, res: Response) => {
  res.send(arr);
};

export const GetArticle = (req: Request, res: Response) => {
  const response = getArtileById(req, arr);
  res.send(response);
};

export const AddArticles = (req: Request, res: Response) => {
  const result = AddArticle(req, arr, id);
  res.status(201).json(result);
};

export const UpdateArticle = (req: Request, res: Response) => {
  const { name } = req.body;
  const article = editArticle(req, arr);

  if (article) {
    article.name = name;
    res.send(200).json(article);
  }
};

export const DeleteArticle = (req: Request, res: Response) => {
  deleteArticle(req, arr);
  res.status(200).json({ message: "Deleted Sucsessfully" });
};
