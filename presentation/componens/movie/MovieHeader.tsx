import IonIcon from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screngHeight } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        start={[0, 0]}
        style={{
          height: screngHeight * 0.4,
          width: "100%",
          position: "absolute",
          zIndex: 1,
        }}
        colors={["rgba(0,0,0,0.3)", "transparent"]}
      ></LinearGradient>
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 20,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <IonIcon
            name="arrow-back-outline"
            size={30}
            color="white"
            className="shdow-lg"
          />
        </Pressable>
      </View>
      <View
        style={{ height: screngHeight * 0.7, width: "100%" }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden w-full">
          <Image
            className="flex-1 w-full"
            source={{ uri: poster }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View className="flex-row justify-between items-center px-5 mt-5">
        <Text className="text-black text-2xl font-bold">{originalTitle}</Text>
        <Text className="text-black text-2xl font-bold">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
