import { Request, Response } from "express";
//import * as peopleService from "@/services/people-service";

export async function getMoviesReviews(req: Request, res: Response) {
  //const person = await peopleService.getRandomPerson();
  res.send("OK RECBIDO");
}

export async function insertMovieReview(req: Request, res: Response) {
    //const person = await peopleService.getRandomPerson();
    res.send("OK INSERIDO");
}

export async function editMovieReview(req: Request, res: Response) {
    //const person = await peopleService.getRandomPerson();
    res.send("OK EDITADO");
}