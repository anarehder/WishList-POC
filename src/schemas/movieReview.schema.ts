import { CreateMovieReview } from '@/protocols';
import Joi from 'joi';

export const createMovieReviewSchema = Joi.object<CreateMovieReview>({
    stars: Joi.number().positive().min(1).max(5).required(),
    comments: Joi.string().required()
});