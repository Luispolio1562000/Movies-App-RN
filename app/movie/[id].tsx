import ActorCard from "@/presentation/componens/movie/ActorCard";
import MovieDescription from "@/presentation/componens/movie/MovieDescription";
import MovieHeader from "@/presentation/componens/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);
  const { castQuery } = useMovie(+id);

  if (
    movieQuery.isLoading ||
    movieQuery.isFetching ||
    !movieQuery.data ||
    castQuery.isLoading ||
    castQuery.isFetching ||
    !castQuery.data
  ) {
    return (
      <SafeAreaView className="flex flex-1 justify-center items-center">
        <Text className="text-2xl text-pink-400">Cargando detalles...</Text>
        <ActivityIndicator color="pink" size={30} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex flex-1 justify-center items-center">
      <ScrollView className="flex-1 flex-col w-full">
        <MovieHeader
          originalTitle={movieQuery.data.originalTitle}
          poster={movieQuery.data.poster}
          title={movieQuery.data.title}
        />
        <MovieDescription movie={movieQuery.data} />
        <Text className="font-semibold text-left mt-5 ml-5">Actores</Text>
        <FlatList
          horizontal
          data={castQuery.data}
          keyExtractor={(item, index) => ` ${item.id}-${index}`}
          renderItem={({ item }) => <ActorCard actor={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
