import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { MoviesDBResponse } from "@/infrastructure/models/moviesdb-response";

interface Options {
  page?: number;
  limit?: number;
}

export const upcomingMoviesgAction = async ({
  page = 1,
  limit = 10,
}: Options = {}) => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/upcoming", {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.error(" upcomingMoviesAction::error", error);
    throw "Cannot fetch upcoming movies";
  }
};
