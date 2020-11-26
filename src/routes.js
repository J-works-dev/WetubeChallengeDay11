const routes = {
  home: "/",
  movieDetail: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return "/";
    }
  },
  filter: "/filter"
};

export default routes;
