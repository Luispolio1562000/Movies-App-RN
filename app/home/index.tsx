import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();

  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
        <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
