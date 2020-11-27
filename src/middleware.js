import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WA11 MOVIES";
  res.locals.routes = routes;
  next();
};
