import { Formatter } from "@/config/helpers/formatter";
import { MovieDetails } from "@/infrastructure/models/movie.interface";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: MovieDetails;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row gap-1 my-2">
        <Text>{movie.raiting}</Text>
        <Text>- {movie.genres.join(", ")}</Text>
      </View>
      <Text className="font-semibold text-center mt-5">Sinopsis</Text>
      <Text className="text-justify font-light mt-2">{movie.description}</Text>
      <Text className="font-semibold text-left mt-5">Presupuesto</Text>
      <Text className="text-justify font-light mt-2">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
