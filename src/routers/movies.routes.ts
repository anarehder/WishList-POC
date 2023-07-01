import { editMovie, getMovies, insertMovie } from "@/controllers/movies.controllers";
import { validateBody, validateSchema } from "@/middlewares/validation.middleware";
import { createMovieSchema } from "@/schemas/movie.schema";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/movies", getMovies);
//moviesRouter.post("/movies", validateBody(createMovieSchema), insertMovie);
moviesRouter.post("/movies", validateSchema(createMovieSchema), insertMovie);
moviesRouter.put("/movies", editMovie);

export default moviesRouter;