import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infrastructure/models/moviesdb-response";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/now_playing");
    console.log("nowPlayingAction::data", data);
    return data;
  } catch (error) {
    console.error(" nowPlayingAction::error", error);
    throw "Cannot fetch now playing movies";
  }
};
