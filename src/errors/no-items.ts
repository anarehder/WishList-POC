import { ApplicationError } from '@/protocols';

export function noItems(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'There are no items yet!',
  };
}