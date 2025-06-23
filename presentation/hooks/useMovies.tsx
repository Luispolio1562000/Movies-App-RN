import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesgAction } from "@/core/actions/movies/popular-playing.actions";
import { topRatedMoviesgAction } from "@/core/actions/movies/top-rated.actions";
import { upcomingMoviesgAction } from "@/core/actions/movies/upcoming.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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
  const topRatedQuery = useInfiniteQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: ({ pageParam }) => {
      console.log("pageParam", pageParam);
      return topRatedMoviesgAction({ page: pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesgAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
