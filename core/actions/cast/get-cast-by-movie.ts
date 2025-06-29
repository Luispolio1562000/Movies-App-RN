import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { Cast } from "@/infrastructure/models/cast.interface";
import { CastDBResponse } from "@/infrastructure/models/castdb-response";

export const getCastByMovieAction = async (
  id: number | string
): Promise<Cast[]> => {
  console.log("id", id);
  try {
    const { data } = await movieApi.get<CastDBResponse>(`/${id}/credits`);

    return MovieMapper.fromTheMovieDBToCast(data);
  } catch (error) {
    console.error(" getCastByMovieAction::error", error);
    throw "Cannot fetch cast";
  }
};
