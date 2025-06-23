import { Movie } from "@/infrastructure/models/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    //? Posicion actual en el scroll, tamaño del contenido, tamaño de la vista
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width >= contentSize.width - 100;

    if (!isEndReached) return;

    isLoading.current = true;
    //TODO: Cargar mas peliculas
    console.log("Cargar mas peliculas");
    loadNextPage && loadNextPage();
  };
  return (
    <View>
      {title && (
        <Text className="text-purple-400 text-2xl font-light m-4">{title}</Text>
      )}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => ` ${item.id}-${index}`}
        renderItem={({ item }) => (
          <MoviePoster smallPoster id="item.id" moviePoster={item.poster} />
        )}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
