import connection from "@/database/database.connection";

import { Collection, CreateMovie, FullMovie, Movie } from "@/protocols";

export async function getMoviesDB()  {
    const query = `SELECT * FROM wishlist_movies;`;
    const result = await connection.query<Collection<Movie>>(query);
    return result;
}

export async function getMoviesFullDB()  {
    const query = `SELECT wishlist_movies.*, movies_review.stars, movies_review.comments FROM wishlist_movies LEFT JOIN movies_review ON wishlist_movies.id = movies_review.movie_id;`;
    const result = await connection.query<Collection<FullMovie>>(query);
    return result;
}

export async function insertWatchedDB(id: number) {
    const query = `UPDATE wishlist_movies SET status = $1 WHERE id = $2;`;
    const result = await connection.query(query, ['true', id]);
    return result;
}

export async function getMovieByName(newMovie: CreateMovie)  {
    const query = `SELECT * FROM wishlist_movies WHERE name ILIKE $1;`;
    const result = await connection.query<Movie>(query, [newMovie.name]);
    return result;
}

export async function getMovieById(id: number) {
    const query = `SELECT * FROM wishlist_movies WHERE id = $1;`;
    const result = await connection.query<Movie>(query, [id]);
    return result;
}

export async function insertMovieDB(newMovie: CreateMovie) {
    const {name, streaming, genre} = newMovie;
    const query = `INSERT INTO wishlist_movies (name, streaming, genre) VALUES ($1, $2, $3)`;
    const result = await connection.query(query, [name, streaming, genre]);
    return result;
}

export async function editMovieDB(editedMovie: CreateMovie, id: number) {
    const {name, streaming, genre} = editedMovie;
    const query = `UPDATE wishlist_movies SET name = $1, streaming = $2, genre = $3 WHERE id = $4;`;
    const result = await connection.query(query, [name, streaming, genre, id]);
    return result;
}