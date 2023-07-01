import { editMovie, getMovies, insertMovie } from "@/controllers/movies.controllers";
import { Router } from "express";

const moviesRouter = Router();

moviesRouter.get("/movies", getMovies);
moviesRouter.post("/movies", insertMovie);
moviesRouter.put("/movies", editMovie);

export default moviesRouter;