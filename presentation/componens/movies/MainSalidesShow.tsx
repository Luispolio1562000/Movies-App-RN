import { Movie } from "@/infrastructure/models/movie.interface";
import React, { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}
//* Obtiene el ancho de la pantalla al cargar la app.
// Dimensions.get("screen").width;

const MainSalidesShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);

  const { width } = useWindowDimensions();

  if (movies.length === 0) {
    return null;
  }

  return (
    <View className="h-[250px] w-full">
      <Carousel
        data={movies}
        ref={ref}
        width={200}
        height={350}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            moviePoster={item.poster}
            smallPoster={false}
          />
        )}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

export default MainSalidesShow;
