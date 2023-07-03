import { deleteMovieDB, editMovieDB, getMoviesDB, getMoviesFullDB, getNumberOfMoviesDB, insertWatchedDB } from "@/repository/movies.repository";
import { notFoundError } from "@/errors/not-found-error";
import { noItems } from "@/errors/no-items";
import { CreateMovie } from "@/protocols";
import { insertMovieDB } from "@/repository/movies.repository";
import { cannotAddMovie, cannotAddWatched, cannotDeleteMovie } from "@/errors/cannot-add";

export async function getMoviesServices(){
    const movies = await getMoviesDB();
    if (!movies) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }
    if (movies.rowCount === 0) {
        throw noItems(); // lança um erro para quem chamou essa função!
    }
    return movies.rows;
}

export async function getMoviesFullServices(){
    const movies = await getMoviesFullDB();
    if (!movies) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }
    if (movies.rowCount === 0) {
        throw noItems(); // lança um erro para quem chamou essa função!
    }
    return movies.rows;
}

export async function getNumberOfMoviesServices(){
    const result = await getNumberOfMoviesDB();
    if (!result) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }
    if (result.rowCount === 0) {
        throw noItems(); // lança um erro para quem chamou essa função!
    }
    return result.rows[0];
}

export async function insertWatchedServices(id:number){
    const result = await insertWatchedDB(id);
    if (result.rowCount === 0) {
        throw cannotAddWatched(); // lança um erro para quem chamou essa função!
    }
    return result;
}

export async function insertMovieServices(newMovie:CreateMovie){
    const result = await insertMovieDB(newMovie);
    if (result.rowCount === 0) {
        throw cannotAddMovie(); // lança um erro para quem chamou essa função!
    }
    return result;
}

export async function editMovieServices(editedMovie:CreateMovie, id:number){
    const result = await editMovieDB(editedMovie, id);
    if (result.rowCount === 0) {
        throw cannotAddMovie(); // lança um erro para quem chamou essa função!
    }
    return result;
}

export async function deleteMovieServices(id:number){
    const result = await deleteMovieDB(id);
    if (result.rowCount === 0) {
        throw cannotDeleteMovie(); // lança um erro para quem chamou essa função!
    }
    return result;
}