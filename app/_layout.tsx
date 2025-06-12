import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

const RootLayout = () => {
  nowPlayingAction();

  return (
    <SafeAreaView>
      <View>
        <Text>_layout</Text>
      </View>
    </SafeAreaView>
  );
};

export default RootLayout;
