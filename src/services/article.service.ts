import { Article } from "../controllers/arcticle.controller";
import { Request, Response } from "express";

let arr: Article[] = [];
let id: number = 0;

export const getAllAtricles = () => {
  return arr;
};

export const getArtileById = (req: Request) => {
  const id = JSON.parse(req.params.id);
  const article = arr.find((el: Article) => el.id == id);

  return article;
};

export const AddArticle = (req: Request) => {
  const articlesData = req.body;
  id++;
  arr.push({ id: id, name: articlesData.name });

  return arr;
};

export const editArticle = (req: Request) => {
  const id = parseInt(req.params.id);

  const article = arr.find((el: Article) => el.id === id);

  return article;
};

export const deleteArticle = (req: Request) => {
  const id = parseInt(req.params.id);

  arr = arr.filter((el: Article) => el.id !== id);
};
