import { useNavigation } from '@react-navigation/native'
import { Text, Image, StyleSheet, Pressable, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { useMoviesStore } from '../hooks/useMoviesStore';



export const MoviePoster = ({ movie }) => {

  const navigation = useNavigation();

  const { startGetMovieId } = useMoviesStore();

  const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`


  return (
    
      <Pressable 
        onPress={ () => {
          navigation.navigate( 'DetailsScreen', movie )
          startGetMovieId(movie.id)
        }}
        style={{ borderRadius: 39 }}
      >
        {
          movie?.backdrop_path && 
            (
                <View style={{ height: 240 }}>
                    <Image
                      
                      source={{ uri }}
                      style={ styles.img }
                      resizeMode='cover'
                      
                    />
                    <View style={ styles.containerInfo }>

                        <Text style={ styles.title }>{movie.title}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>

                          <Icon 
                            name="star-sharp"
                            size={ 15 }
                            color="#FFCE31"
                          />
                          <Text style={{ color: '#FFF', marginLeft: 3}}>
                            {(movie.vote_average).toString().slice(0, 3)}
                          </Text>

                        </View>

                          <View style={ styles.colorPlay } />
                            
                            <Icon 
                              name="play-circle-sharp"
                              size={ 52 }
                              color="#FFF"
                              style={ styles.iconPlay }
                            />

                    </View>
                </View>
            )
        }
        
      </Pressable>
    
  )
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 30,
    height: 204,
    width: 340,
  },
  containerInfo: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    width: 310,
    height: 60,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    top: 15,
  },
  iconPlay: {
    position: 'absolute',
    bottom: 2,
    right: 0,
    borderRadius: 50,
  },
  colorPlay: {
    backgroundColor: '#FF722A',
    height: 20,
    width: 20,
    position: 'absolute',
    bottom: 19,
    right: 15
  },
});

