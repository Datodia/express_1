import { Request, Response } from "express";
import {
  AddArticle,
  deleteArticle,
  editArticle,
  getAllAtricles,
  getArtileById,
} from "../services/article.service";

export type Article = {
  id: number;
  name: string;
};

export const GetAllArticle = (req: Request, res: Response) => {
  const respose = getAllAtricles();
  res.send(respose);
};

export const GetArticle = (req: Request, res: Response) => {
  const response = getArtileById(req);
  res.send(response);
};

export const AddArticles = (req: Request, res: Response) => {
  const result = AddArticle(req);
  res.status(201).json(result);
};

export const UpdateArticle = (req: Request, res: Response) => {
  const { name } = req.body;
  const article = editArticle(req);

  if (article) {
    article.name = name;
    res.send(200).json(article);
  }
};

export const DeleteArticle = (req: Request, res: Response) => {
  deleteArticle(req);
  res.status(200).json({ message: "Deleted Sucsessfully" });
};
