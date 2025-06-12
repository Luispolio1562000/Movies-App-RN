import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { MoviesDBResponse } from "@/infrastructure/models/moviesdb-response";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/now_playing");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.error(" nowPlayingAction::error", error);
    throw "Cannot fetch now playing movies";
  }
};
