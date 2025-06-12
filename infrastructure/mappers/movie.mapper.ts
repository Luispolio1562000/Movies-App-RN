import { Movie } from "../models/movie.interface";
import { Result } from "../models/moviesdb-response";
export class MovieMapper {
  static fromTheMovieDBToMovie(movie: Result): Movie {
    return {
      id: movie.id.toString(),
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      raiting: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  }
}
