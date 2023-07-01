import { ApplicationError } from '@/protocols';

export function alreadyExists(): ApplicationError {
  return {
    name: 'BadRequestError',
    message: 'This item already exists!',
  };
}