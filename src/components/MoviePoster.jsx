import { useNavigation } from '@react-navigation/native'
import { Text, Image, StyleSheet, Pressable, View } from 'react-native'



export const MoviePoster = ({ 
  movie, 
  width = 350, 
  height = 200, 
  title = false, 
  marginLeft = 0 ,
  borderRadius = 18,
  sizeText = 12
}) => {

  const navigation = useNavigation();



  

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  return (
    <View style={{ alignItems: 'center' }}>
      <Pressable 
        onPress={ () => {
          navigation.navigate( 'DetailsScreen', movie )
          startGetMovieId(movie.id)
        }}
        style={{ ...styles.containerImg, width, height, borderRadius, marginLeft }}
      >
        {
          movie?.poster_path && 
            (
                <Image 
                  source={{ uri }}
                  style={{ flex: 1, borderRadius }}
                />
            )
        }
        
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  containerImg:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 10,
  },
  img: { 
    flex: 1,
  },
  title:{
    color: '#E2E2E2',
    marginTop: 2,
    textAlign: 'center',
    marginLeft: 8
  }
});

