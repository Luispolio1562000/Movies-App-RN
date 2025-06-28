import MovieDescription from "@/presentation/componens/movie/MovieDescription";
import MovieHeader from "@/presentation/componens/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);
  if (movieQuery.isLoading || movieQuery.isFetching || !movieQuery.data) {
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieScreen;
