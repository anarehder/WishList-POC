import { cannotAddReview } from "@/errors/cannot-add";
import { noItems } from "@/errors/no-items";
import { notFoundError } from "@/errors/not-found-error";
import { CreateMovieReview } from "@/protocols";
import { editMovieReviewDB, getMovieReviewByIdDB, getMoviesReviewDB, insertMovieReviewDB } from "@/repository/moviesReviews.repository";

export async function getMoviesReviewServices(){
    const reviews = await getMoviesReviewDB();
    if (!reviews) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }
    if (reviews.rowCount === 0) {
        throw noItems(); // lança um erro para quem chamou essa função!
    }
    return reviews.rows;
}

export async function getMovieReviewByIdServices(id: number){
    const reviews = await getMovieReviewByIdDB(id);
    if (!reviews) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }
    if (reviews.rowCount === 0) {
        throw noItems(); // lança um erro para quem chamou essa função!
    }
    return reviews.rows;
}

export async function insertMovieReviewServices(newReview:CreateMovieReview, id:number){
    const result = await insertMovieReviewDB(newReview,id);
    if (result.rowCount === 0) {
        throw cannotAddReview(); // lança um erro para quem chamou essa função!
    }
    return result;
}

export async function editMovieReviewServices(editedReview:CreateMovieReview, id:number){
    const result = await editMovieReviewDB(editedReview, id);
    if (result.rowCount === 0) {
        throw cannotAddReview(); // lança um erro para quem chamou essa função!
    }
    return result;
}