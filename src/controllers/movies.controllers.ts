import { CreateMovie } from "@/protocols";
import { deleteMovieServices, editMovieServices, getMoviesFullServices, getMoviesServices, getNumberOfMoviesServices, insertMovieServices, insertWatchedServices } from "@/services/movies.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getMovies(req: Request, res: Response) {
    try {
        const movies = await getMoviesServices();
        res.status(httpStatus.OK).send(movies);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getMoviesWithReview(req: Request, res: Response) {
    try {
        const movies = await getMoviesFullServices();
        res.status(httpStatus.OK).send(movies);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getNumberOfMovies(req: Request, res: Response) {
    try {
        const number = await getNumberOfMoviesServices();
        res.status(httpStatus.OK).send(number);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function insertWatched(req: Request, res: Response) {
    const { id } = req.params;
    const numId: number = Number(id);
    try {
        await insertWatchedServices(numId);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function insertMovie(req: Request, res: Response) {
    const newMovie = req.body as CreateMovie;
    try {
        await insertMovieServices(newMovie);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function editMovie(req: Request, res: Response) {
    const editedMovie = req.body as CreateMovie;
    const { id } = req.params;
    const numId: number = Number(id);
    try {
        await editMovieServices(editedMovie, numId);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function deleteMovie(req: Request, res: Response) {
    const { id } = req.params;
    const numId: number = Number(id);
    try {
        await deleteMovieServices(numId);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (err) {
        res.status(500).send(err.message);
    }
}