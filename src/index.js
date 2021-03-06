import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { localMiddleware } from "./middleware";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(localMiddleware);
app.use(routes.home, movieRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));
