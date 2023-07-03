import { CreateMovieReview } from "@/protocols";
import { editMovieReviewServices, getMovieReviewByIdServices, getMoviesReviewServices, insertMovieReviewServices } from "@/services/moviesReview.services";
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

export async function getMoviesReviewById(req: Request, res: Response) {
  const { id } = req.params;
  const numId: number = Number(id);
  try {
      const reviews = await getMovieReviewByIdServices(numId);
      res.status(httpStatus.OK).send(reviews);
  } catch (err) {
      res.status(500).send(err.message);
  }
}

export async function insertMovieReview(req: Request, res: Response) {
  const { id } = req.params;
  const numId: number = Number(id);
  const newReview = req.body as CreateMovieReview;
  try {
      await insertMovieReviewServices(newReview, numId);
      res.sendStatus(httpStatus.CREATED);
  } catch (err) {
      res.status(500).send(err.message);
  }
}

export async function editMovieReview(req: Request, res: Response) {
  const editedReview = req.body as CreateMovieReview;
  const { id } = req.params;
  const numId: number = Number(id);
  try {
      await editMovieReviewServices(editedReview, numId);
      res.sendStatus(httpStatus.ACCEPTED);
  } catch (err) {
      res.status(500).send(err.message);
  }
}