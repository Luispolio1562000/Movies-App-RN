import React from "react";
import { Image, Pressable, Text } from "react-native";

interface Props {
  id: string;
  moviePoster: string;
  smallPoster: boolean;
  className?: string;
}

const MoviePoster = ({
  id,
  moviePoster,
  smallPoster = false,
  className,
}: Props) => {
  return (
    <Pressable className={`opacity-90 px-2 ${className}`}>
      <Image
        source={{ uri: moviePoster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      ></Image>
      <Text className="text-purple-500 text-center">{id}</Text>
    </Pressable>
  );
};

export default MoviePoster;
