import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { MovieDetails } from "@/infrastructure/models/movie.interface";
import { MovieDBDetailsResponse } from "@/infrastructure/models/moviedb-movie.response";

export const getMovieByIdAction = async (id: number): Promise<MovieDetails> => {
  console.log("id", id);
  try {
    const { data } = await movieApi.get<MovieDBDetailsResponse>(`/${id}`);
    return MovieMapper.fromTheMovieDBToMovieDetails(data);
  } catch (error) {
    console.error(" getMovieByIdAction::error", error);
    throw "Cannot fetch movie";
  }
};
