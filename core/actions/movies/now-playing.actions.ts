import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { MoviesDBResponse } from "@/infrastructure/models/moviesdb-response";

interface Options {
  page?: number;
  limit?: number;
}

export const nowPlayingAction = async ({
  page = 1,
  limit = 10,
}: Options = {}) => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/now_playing", {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.error(" nowPlayingAction::error", error);
    throw "Cannot fetch now playing movies";
  }
};
