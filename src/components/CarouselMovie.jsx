import { Dimensions, FlatList, View } from "react-native";
import Carousel from "react-native-snap-carousel";

import { MoviePoster } from "./MoviePoster";

const { width: screenWidth } =  Dimensions.get('window')


export const CarouselMovie = ({ topRated }) => {

  return (


    <View style={{ height: 210, marginBottom: 35 }}>

          <Carousel
            data={ topRated }
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (
              <View style={{ marginHorizontal: 18}}>
                <MoviePoster movie={ item } />
              </View>
            )}
            itemWidth={ 400 }
            inactiveSlideOpacity={ 0.5 }  
            inactiveSlideScale={ 0.7 }
            sliderWidth={ screenWidth }
            autoplay
            autoplayDelay={ 3000 }
            loop
            enableSnap
            
          />

    </View>

  
  )
}
