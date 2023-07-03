import { NextFunction, Request, Response } from 'express';
import { CreateMovie } from "@/protocols";
import { getMovieById, getMovieByName, insertWatchedDB } from "@/repository/movies.repository";
import { alreadyExists } from '@/errors/already-exists';
import { notFoundError } from '@/errors/not-found-error';
import { badRequestError } from '@/errors/bad-request-error';

export async function validateMovieName(req: Request, res: Response, next: NextFunction) {
    const newMovie = req.body as CreateMovie;
    try {
        const movie = await getMovieByName(newMovie);
        if (movie.rowCount !== 0){
            throw alreadyExists();
        }
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function validateMovieId(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const numId: number = Number(id);
        if (isNaN(numId)){
            throw badRequestError();
        }
        const movie = await getMovieById(numId);
        if (movie.rowCount === 0){
            throw notFoundError();
        }
        res.locals.movie = movie.rows[0];
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function validateMovieForReview(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const numId: number = Number(id);
        if (isNaN(numId)){
            throw badRequestError();
        }
        const movie = await getMovieById(numId);
        if (movie.rowCount === 0){
            throw notFoundError();
        }
        res.locals.movie = movie.rows[0];
        if(movie.rows[0].status === false){
            await insertWatchedDB(numId)
        }
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}