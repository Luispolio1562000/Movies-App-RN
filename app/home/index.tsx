import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <SafeAreaView>
        <View className="justify-center items-center flex-1">
          <ActivityIndicator color="pink" size={40} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View className="mt-2" style={{ marginTop: safeArea.top }}>
      <Text className="text-3xl font-bold text-purple-500 px-4 mb-2">Home</Text>
    </View>
  );
};

export default HomeScreen;
