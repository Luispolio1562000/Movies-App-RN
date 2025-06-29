import { Cast } from "../models/cast.interface";
import { CastDBResponse } from "../models/castdb-response";
import { Movie, MovieDetails } from "../models/movie.interface";
import { MovieDBDetailsResponse } from "../models/moviedb-movie.response";
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
  static fromTheMovieDBToMovieDetails(
    movie: MovieDBDetailsResponse
  ): MovieDetails {
    return {
      id: movie.id.toString(),
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      raiting: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map((genre) => genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(
        (company) => company.name
      ),
    };
  }
  static fromTheMovieDBToCast(response: CastDBResponse): Cast[] {
    return response.cast.map((cast) => ({
      id: cast.id,
      name: cast.name,
      character: cast.character,
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png", // esto en caso de no tener i
    }));
  }
}
