import { getMoviesReviewServices } from "@/services/moviesReview.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getMoviesReviews(req: Request, res: Response) {
  try {
    const reviews = await getMoviesReviewServices();
    res.status(httpStatus.OK).send(reviews);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function insertMovieReview(req: Request, res: Response) {
  //const person = await peopleService.getRandomPerson();
  res.send("OK INSERIDO");
}

export async function editMovieReview(req: Request, res: Response) {
  //const person = await peopleService.getRandomPerson();
  res.send("OK EDITADO");
}