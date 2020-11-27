import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";
import routes from "./routes";

export const home = (req, res) => {
  // console.log("I'm in middleware home");
  // console.log(req.query);
  const movies = getMovies();
  // movies.forEach(function (movie) {
  //   console.log(movie.id);
  // });
  res.render("movies", { pageTitle: "Movies!", movies });
};

export const movieDetail = (req, res) => {
  console.log("I'm in middleware Detail");
  // console.log(req);
  const {
    params: { id }
  } = req;
  try {
    const movie = getMovieById(id);
    res.render("detail", { pageTitle: "Detail", movie });
  } catch (error) {
    res.render("404", { pageTitle: "404 Error", error });
  }
};
export const filterMovie = (req, res) => {
  const {
    query: { year, rating }
  } = req;
  try {
    if (rating) {
      const movies = getMovieByMinimumRating(rating);
      res.render("movies", {
        pageTitle: `Searching by Year: ${rating}`,
        movies
      });
    } else if (year) {
      const movies = getMovieByMinimumYear(year);
      res.render("movies", { pageTitle: `Searching by Year: ${year}`, movies });
    }
  } catch (error) {
    res.render("404", { pageTitle: "404 Error", error });
  }
};
