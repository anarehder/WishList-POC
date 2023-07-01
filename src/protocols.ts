export type Movie = {
    id: number;
    name: string;
    streaming: string;
    genre: string;
    status: boolean;
};

export type CreateMovie = {
    name: string;
    streaming: string;
    genre: string;
}

export type MovieReview = {
    id: number;
    movie_id: number;
    stars: number;
    comments: string;
};

export type CreateMovieReview = Omit<MovieReview, "id">;

export type ApplicationError = {
    name: string;
    message: string;
};

//async function findAll()
//	const users = await connection.query<User>(`SELECT * FROM "users"`);
//    return users.rows;
//  }