import express, { Request, Response } from "express";
const app = express();

const articles = require("./src/routes/article.routes");

app.use("/", articles);

app.listen(3000);
