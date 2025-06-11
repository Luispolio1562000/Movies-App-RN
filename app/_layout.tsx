import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

const RootLayout = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>_layout</Text>
      </View>
    </SafeAreaView>
  );
};

export default RootLayout;
