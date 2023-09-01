import express from "express";
import { articlesRouter } from "./routes/article.routes";
const app = express();

app.use(express.json());

app.use("/", articlesRouter);

app.listen(3000);
