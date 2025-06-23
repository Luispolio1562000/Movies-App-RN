import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { MovieDetails } from "@/infrastructure/models/movie.interface";
import { MovieDBDetailsResponse } from "@/infrastructure/models/moviedb-movie.response";

export const getMovieByIdAction = async (
  id: number | string
): Promise<MovieDetails> => {
  try {
    const { data } = await movieApi.get<MovieDBDetailsResponse>(`/${id}`);
    console.log("Pelicula - HTTP cargada");

    return MovieMapper.fromTheMovieDBToMovieDetails(data);
  } catch (error) {
    console.error(" getMovieByIdAction::error", error);
    throw "Cannot fetch movie";
  }
};
