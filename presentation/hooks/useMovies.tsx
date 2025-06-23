import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesgAction } from "@/core/actions/movies/popular-playing.actions";
import { topRatedMoviesgAction } from "@/core/actions/movies/top-rated.actions";
import { upcomingMoviesgAction } from "@/core/actions/movies/upcoming.actions";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMovies = () => {
  //* Queries
  const nowPlayingQuery = useInfiniteQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: ({ pageParam }) => nowPlayingAction({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const popularQuery = useInfiniteQuery({
    queryKey: ["movies", "popular"],
    queryFn: ({ pageParam }) => popularMoviesgAction({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
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
  const upcomingQuery = useInfiniteQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: ({ pageParam }) => upcomingMoviesgAction({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
