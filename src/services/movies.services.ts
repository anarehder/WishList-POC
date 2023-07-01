import { getMoviesDB } from "@/repository/movies.repository";
import { notFoundError } from "@/errors/not-found-error";

export async function getMoviesServices(){
    const movies = await getMoviesDB();
    if (!movies || movies.rowCount === 0) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }
    return movies;
}