import MainSalidesShow from "@/presentation/componens/movies/MainSalidesShow";
import MovieHorizontalList from "@/presentation/componens/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <SafeAreaView className="flex-1">
        <View className="justify-center items-center flex-1">
          <ActivityIndicator color="pink" size={40} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View className="mt-2" style={{ marginTop: safeArea.top }}>
      <Text className="text-3xl text-center text-red-400 font-bold px-4 mb-2">
        Movies App
      </Text>
      {/* Carousel */}
      <MainSalidesShow movies={nowPlayingQuery.data ?? []} />
      {/* Popular movies horizontal list */}
      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
      {/* Top rated movies horizontal list */}
    </View>
  );
}
