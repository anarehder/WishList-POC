import { editMovie, getMovies, getMoviesWithReview, insertMovie, insertWatched } from "@/controllers/movies.controllers";
import { validateMovieId, validateMovieName } from "@/middlewares/validate-movie.middleware";
import { validateBody } from "@/middlewares/validation.middleware";
import { createMovieSchema } from "@/schemas/movie.schema";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/movies", getMovies);
moviesRouter.get("/moviesFull", getMoviesWithReview);
moviesRouter.put("/movies/watched/:id", validateMovieId, insertWatched);
moviesRouter.post("/movies", validateBody(createMovieSchema), validateMovieName, insertMovie);
moviesRouter.put("/movies/:id", validateMovieId, validateBody(createMovieSchema), validateMovieName, editMovie);

export default moviesRouter;