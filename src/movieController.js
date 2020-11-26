import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";
// import routes from "./routes";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { pageTitle: "Movies", movies });
};

export const movieDetail = (req, res) => {
  const {
    id: { id }
  } = req;
  const movie = getMovieById(id);
  res.render("detail", { pageTitle: "Detail", movie });
};
export const filterMovie = (req, res) => {
  const {
    query: { term: year, rating }
  } = req;
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    res.render("movies", { pageTitle: "Serch Movies", year, movies });
  } else if (year) {
    const movies = getMovieByMinimumYear(year);
    res.render("movies", { pageTitle: "Serch Movies", rating, movies });
  }
};
