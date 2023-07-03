import { ApplicationError } from '@/protocols';

export function cannotAddMovie(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'The movie was not inserted/edited!',
  };
}

export function cannotAddReview(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'The movie review was not inserted/edited!',
  };
}

export function cannotAddWatched(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'It was not possible to mark as watched!',
  };
}

export function cannotDeleteMovie(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'It was not possible to delete the movie!',
  };
}