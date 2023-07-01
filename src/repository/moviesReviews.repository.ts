import connection from "@/database/database.connection";
import { MovieReview } from "@/protocols";

export async function getMoviesReviewDB() {
    const query = `SELECT * FROM movies_review;`;
    const result = await connection.query<MovieReview>(query);
    return result;
}