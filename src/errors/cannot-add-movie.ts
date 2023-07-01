import { ApplicationError } from '@/protocols';

export function cannotAddMovie(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'The movie was not inserted/edited!',
  };
}