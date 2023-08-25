import express, { Request, Response } from "express";
const app = express();

type Article = {
  id: number;
  name: string;
};

app.use(express.json());

let arr: Article[] = [];
let id: number = 0;

app.get("/articles", (req: Request, res: Response) => {
  res.send(arr);
});

app.get("/articles/:id", (req: Request, res: Response) => {
  const id = JSON.parse(req.params.id);
  const article = arr.find((el: Article) => el.id == id);

  res.send(article);
});

app.post("/articles", (req: Request, res: Response) => {
  const articlesData = req.body;
  id++;
  arr.push({ id: id, name: articlesData.name });
  res.status(201).json(articlesData);
});

app.patch("/articles/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const article = arr.find((el: Article) => el.id === id);

  if (article) {
    article.name = name;
    res.send(200).json(article);
  }
});

app.delete("/articles/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  arr = arr.filter((el: Article) => el.id !== id);
  res.status(200).json({ message: "Deleted Sucsessfully" });
});

app.listen(3000);
