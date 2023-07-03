import { editMovieReview, getMoviesReviewById, getMoviesReviews, insertMovieReview } from "@/controllers/moviesReview.controllers";
import { validateMovieForReview, validateMovieId } from "@/middlewares/validate-movie.middleware";
import { validateBody } from "@/middlewares/validation.middleware";
import { Router } from "express";
import {createMovieReviewSchema} from "@/schemas/movieReview.schema";

const moviesReviewRouter = Router();

moviesReviewRouter.get("/moviesReview", getMoviesReviews);
moviesReviewRouter.get("/moviesReview/get/:id", validateMovieId, getMoviesReviewById);
moviesReviewRouter.post("/moviesReview/create/:id", validateMovieForReview, validateBody(createMovieReviewSchema), insertMovieReview);
moviesReviewRouter.put("/moviesReview/edit/:id", validateMovieId, validateBody(createMovieReviewSchema), editMovieReview);

export default moviesReviewRouter;