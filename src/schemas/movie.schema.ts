import { CreateMovie } from '@/protocols';
import Joi from 'joi';

export const createMovieSchema = Joi.object<CreateMovie>({
    name: Joi.string().required(),
    streaming: Joi.string().required(),
    genre: Joi.string().required()
});