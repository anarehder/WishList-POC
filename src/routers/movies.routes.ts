import { editMovie, getMovies, insertMovie } from "@/controllers/movies.controllers";
import { validateMovieId, validateMovieName } from "@/middlewares/validate-movie.middleware";
import { validateBody } from "@/middlewares/validation.middleware";
import { createMovieSchema } from "@/schemas/movie.schema";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/movies", getMovies);
moviesRouter.post("/movies", validateBody(createMovieSchema), validateMovieName, insertMovie);
moviesRouter.put("/movies/:id", validateMovieId, validateBody(createMovieSchema), editMovie);

export default moviesRouter;