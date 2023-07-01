import { Router } from "express";
import moviesRouter from "./movies.routes";
import moviesReviewRouter from "./moviesReviews.routes";

const router = Router()

router.use(moviesRouter)
router.use(moviesReviewRouter)

export default router;