import { notFoundError } from "@/errors/not-found-error";
import { getMoviesReviewDB } from "@/repository/moviesReviews.repository";

export async function getMoviesReviewServices(){
    const reviews = await getMoviesReviewDB();
    if (!reviews || reviews.rowCount === 0) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }
    return reviews;
}