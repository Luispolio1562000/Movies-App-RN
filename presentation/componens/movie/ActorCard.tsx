import { Cast } from "@/infrastructure/models/cast.interface";
import React from "react";
import { Image, Text, View } from "react-native";

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow-2xl"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-sm">{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCard;
