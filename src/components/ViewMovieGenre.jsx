import { Text, Image, StyleSheet, Pressable, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Icon  from 'react-native-vector-icons/Ionicons';
import { useMoviesStore } from '../hooks/useMoviesStore';


export const ViewMovieGenre = ({ movie, genre }) => {

    const navigation = useNavigation();

    const { startGetMovieId } = useMoviesStore();

    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;


  return (


    
    <TouchableOpacity 
        activeOpacity={ 0.8 } 
        onPress={ () => {
            navigation.navigate( 'DetailsScreen', movie )
            startGetMovieId(movie.id)
        }}
        style={{ flex: 1 }}
    >
        {
        movie?.backdrop_path && 
            (
                <View style={styles.container}>

                    <Image 
                        source={{ uri }}
                        style={ styles.img }
                        resizeMode='cover'
                    />

                    <View style={ styles.containerInfo }>

                        <Text style={ styles.title }>{movie.title}</Text>

                        <View style={ styles.save }>
                            <Icon 
                                name={ "bookmark-outline"}
                                color="#FFF"
                                size={ 15 } 
                            />
                        </View>

                        <Text style={ styles.detail }>{movie.original_language} | {genre} | {movie?.runtime ?? "120"}min</Text>

                        <View style={ styles.containerStart }>

                            <Icon 
                                name="star-sharp"
                                size={ 15 }
                                color="#FFCE31"
                            />
                            <Text style={{ color: '#FFF', marginLeft: 3}}>{(movie.vote_average).toString().slice(0, 3)}</Text>

                        </View>

                        <View style={ styles.shadow } />

                        <View style={ styles.colorPlay } />
                        
                        <Icon 
                            name="play-circle-sharp"
                            size={ 30 }
                            color="#FFF"
                            style={ styles.iconPlay }
                        />

                    </View>

                </View>
            )
        }
        
    </TouchableOpacity>
    
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(221, 221, 221, 0.2)', 
        borderRadius: 22,
        height: 127,
        marginVertical: 10,
        padding: 10,
        flexDirection: 'row',
        width: 339,
        marginHorizontal: 20 
      },
    img: {
        borderRadius: 17,
        width: 125,
        height: 108
    },
    containerInfo: {
       width: 200
    },
    title: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700',
        left: 10,
        top: 10, 
        width: 140,
    },
    iconPlay: {
       position: 'absolute',
       right: 0,
       bottom: 0
    },
    colorPlay: {
        backgroundColor: '#FF722A',
        height: 10,
        width: 14,
        position: 'absolute',
        bottom: 12,
        right: 7
    },
    containerStart: { 
        flexDirection:'row', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        left: 10,
        backgroundColor: 'gray',
        width: 53,
        height: 30,
        justifyContent: 'center',
        borderRadius: 20,
        opacity: 0.9
    },
    save: {
        position: 'absolute',
        top: 10,
        right: 4,
        backgroundColor: '#818089',
        width: 24,
        height: 24 ,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detail: {
        color: '#99989B',
        fontSize: 10.5, 
        bottom: 38,
        width: 120,
        left: 10,
        textTransform : 'uppercase',
        position: 'absolute'
    },
    shadow: {
        height: 30.5,
        width: 30.5,
        backgroundColor: '#818089',
        position: 'absolute',
        right: 0.8,
        bottom: 1,
        borderRadius: 20,
        opacity: 0.7
    }
  });