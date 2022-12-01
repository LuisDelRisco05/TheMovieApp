import { Dimensions, View } from "react-native";

import Carousel from "react-native-snap-carousel";

import { MoviePoster } from "./MoviePoster";


const { width: screenWidth } =  Dimensions.get('window')

export const CarouselMovie = ({ topRated }) => {

  return (


    <View style={{ backgroundColor: 'green'  }}>

      <Carousel 
          data={ topRated }
          renderItem={ ({ item }) => (
            <MoviePoster movie={ item } title={ true } />
          )}
          sliderWidth={ screenWidth }
          itemWidth={ 360 }
          inactiveSlideOpacity={ 0.5 }  
          enableSnap={ true }
      />

    </View>

  
  )
}
