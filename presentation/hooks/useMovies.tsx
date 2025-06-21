import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesgAction } from "@/core/actions/movies/popular-playing.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  //* Queries
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesgAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  return {
    nowPlayingQuery,
    popularQuery,
  };
};
