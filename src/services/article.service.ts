import { Article } from "../controllers/arcticle.controller";
import { Request, Response } from "express";

export const getArtileById = (req: Request, arr: Article[]) => {
  const id = JSON.parse(req.params.id);
  const article = arr.find((el: Article) => el.id == id);

  return article;
};

export const AddArticle = (req: Request, arr: Article[], id: number) => {
  const articlesData = req.body;
  id++;
  arr.push({ id: id, name: articlesData.name });

  return arr;
};

export const editArticle = (req: Request, arr: Article[]) => {
  const id = parseInt(req.params.id);

  const article = arr.find((el: Article) => el.id === id);

  return article;
};

export const deleteArticle = (req: Request, arr: Article[]) => {
  const id = parseInt(req.params.id);

  arr = arr.filter((el: Article) => el.id !== id);
};
