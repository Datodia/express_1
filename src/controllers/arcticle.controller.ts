import { Request, Response } from "express";
import { ArticlesService } from "../services/article.service";

export class ArticlesContoller {
  private readonly articlesService: ArticlesService;

  constructor() {
    this.articlesService = new ArticlesService();
  }

  getAllArticle(req: Request, res: Response) {
    const response = this.articlesService.getAllArticles();
    res.send(response);
  }

  getArticle(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const response = this.articlesService.getArticleById(id);
    res.send(response);
  }
  addArtice(req: Request, res: Response) {
    const result = this.articlesService.AddArticle(req.body.name);
    res.sendStatus(201).json(result);
  }

  updateArticle(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const article = this.articlesService.editArticle(id, name);

    if (article) {
      res.send(200).json(article);
    }
  }

  deleteArticle(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    this.articlesService.deleteArticle(id);

    res.sendStatus(200).json({ message: "Deleted Sucsessfully" });
  }
}

// export const GetAllArticle = (req: Request, res: Response) => {
//   const respose = getAllAtricles();
//   res.send(respose);
// };

// export const GetArticle = (req: Request, res: Response) => {
//   const response = getArtileById(req);
//   res.send(response);
// };

// export const AddArticles = (req: Request, res: Response) => {
//   const result = AddArticle(req);
//   res.status(201).json(result);
// };

// export const UpdateArticle = (req: Request, res: Response) => {
//   const { name } = req.body;
//   const article = editArticle(req);

//   if (article) {
//     article.name = name;
//     res.send(200).json(article);
//   }
// };

// export const DeleteArticle = (req: Request, res: Response) => {
//   deleteArticle(req);
//   res.status(200).json({ message: "Deleted Sucsessfully" });
// };
