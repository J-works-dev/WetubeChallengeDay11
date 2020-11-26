export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WA11 MOVIES";
  next();
};
