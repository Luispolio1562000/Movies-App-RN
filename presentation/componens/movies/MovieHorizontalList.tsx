import { Movie } from "@/infrastructure/models/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && (
        <Text className="text-purple-400 text-2xl font-light mb-4 ml-4">
          {title}
        </Text>
      )}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MoviePoster smallPoster id="item.id" moviePoster={item.poster} />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
