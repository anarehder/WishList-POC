import connection from "@/database/database.connection";
import { Collection } from "@/protocols";
import { CreateMovieReview } from "@/protocols";
import { MovieReview } from "@/protocols";

export async function getMoviesReviewDB() {
    const query = `SELECT * FROM movies_review;`;
    const result = await connection.query<Collection<MovieReview>>(query);
    return result;
}

export async function getMovieReviewByIdDB(id: number) {
    const query = `SELECT * FROM movies_review WHERE movie_id = $1;`;
    const result = await connection.query<MovieReview>(query, [id]);
    return result;
}

export async function insertMovieReviewDB(newReview: CreateMovieReview, id: number) {
    const {stars, comments} = newReview;
    const query = `INSERT INTO movies_review (movie_id, stars, comments) VALUES ($1, $2, $3)`;
    const result = await connection.query(query, [id, stars, comments]);
    return result;
}

export async function editMovieReviewDB(editedReview: CreateMovieReview, id: number) { // apenas 1 review por filme (uso pessoal)
    const {stars, comments} = editedReview;
    const query = `UPDATE movies_review SET movie_id = $1, stars = $2, comments = $3 WHERE movie_id = $4;`;
    const result = await connection.query(query, [id, stars, comments, id]);
    return result;
}