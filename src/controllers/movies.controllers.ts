import { getMoviesServices } from "@/services/movies.services";
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

export async function insertMovie(req: Request, res: Response) {
    //const { name, streaming, genre } = req.body;

    try {
        //console.log(name, streaming, genre);
        //const movies = await getMoviesServices();
        res.status(httpStatus.OK).send("INSERIDO2");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function editMovie(req: Request, res: Response) {
    try {
        //const movies = await getMoviesServices();
        res.status(httpStatus.OK).send("EDITADO");
    } catch (err) {
        res.status(500).send(err.message);
    }
}