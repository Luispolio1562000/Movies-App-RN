import { router } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

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
    <Pressable
      onPress={() => router.push(`/movie/${id}`)}
      className={`opacity-90 px-2 ${MoviePoster}`}
    >
      <Image
        source={{ uri: moviePoster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      ></Image>
    </Pressable>
  );
};

export default MoviePoster;
