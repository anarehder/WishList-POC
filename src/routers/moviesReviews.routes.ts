import { editMovieReview, getMoviesReviews, insertMovieReview } from "@/controllers/moviesReview.controllers";
import { Router } from "express";
//import * as peopleController from "@/controllers/people-controller";

const moviesReviewRouter = Router();

moviesReviewRouter.get("/moviesReview", getMoviesReviews);
moviesReviewRouter.post("/moviesReview", insertMovieReview);
moviesReviewRouter.put("/moviesReview", editMovieReview);

export default moviesReviewRouter;