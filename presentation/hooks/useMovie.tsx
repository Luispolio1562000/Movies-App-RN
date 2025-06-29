import { getCastByMovieAction } from "@/core/actions/cast/get-cast-by-movie";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number | string) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const castQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getCastByMovieAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    movieQuery,
    castQuery,
  };
};
