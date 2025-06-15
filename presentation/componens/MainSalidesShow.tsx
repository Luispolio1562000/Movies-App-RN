import { Movie } from "@/infrastructure/models/movie.interface";
import React, { useRef } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface Props {
  movies: Movie[];
}
//* Obtiene el ancho de la pantalla al cargar la app.
// Dimensions.get("screen").width;

const MainSalidesShow = ({ movies }: Props) => {
  console.log("MainSalidesShow::movies", movies);
  const ref = useRef<ICarouselInstance>(null);

  const width = useWindowDimensions().width;
  console.log("MainSalidesShow::width", width);
  return (
    <View className="h-[250px] w-full">
      <Carousel
        data={movies}
        ref={ref}
        width={200}
        height={350}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        style={{ width: width }}
      />
    </View>
  );
};

export default MainSalidesShow;
