import { editMovieDB, getMoviesDB, getMoviesFullDB, insertWatchedDB } from "@/repository/movies.repository";
import { notFoundError } from "@/errors/not-found-error";
import { noItems } from "@/errors/no-items";
import { CreateMovie } from "@/protocols";
import { insertMovieDB } from "@/repository/movies.repository";
import { cannotAddMovie, cannotAddWatched } from "@/errors/cannot-add";
import { getMoviesReviewDB } from "@/repository/moviesReviews.repository";

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