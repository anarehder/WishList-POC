import connection from "@/database/database.connection";

import { Movie } from "@/protocols";

export async function getMoviesDB() {
    const query = `SELECT * FROM wishlist_movies`;
    const result = await connection.query<Movie>(query);
    return result;
}