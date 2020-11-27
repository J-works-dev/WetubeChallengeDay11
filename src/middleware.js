import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "J MOVIES";
  res.locals.routes = routes;
  next();
};
