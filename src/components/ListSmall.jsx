import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native";

import Icon  from 'react-native-vector-icons/Ionicons';

import { useMoviesStore } from '../hooks/useMoviesStore';

export const ListSmall = ({ movie }) => {

    const navigation = useNavigation();

    const { startGetMovieId } = useMoviesStore();


    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  return (
            <Pressable 
                onPress={ () => {
                    navigation.navigate( 'DetailsScreen', movie )
                    startGetMovieId(movie.id)
                }}
                style={{ borderRadius: 18 }}
            >
                {
                    movie?.poster_path && 
                    (
                        <View style={ styles.container }>

                            <Image    
                                source={{ uri }}
                                style={ styles.img }
                                resizeMode='stretch'
                            />

                            <View style={ styles.containerInfo }>

                                <Text style={ styles.title }>{movie.title}</Text>

                                <View style={ styles.containerStart }>

                                    <Icon 
                                        name="star-sharp"
                                        size={ 9 }
                                        color="#FFCE31"
                                    />
                                    <Text style={{ color: '#FFF', marginLeft: 3, fontSize: 8.5 }}>{movie.vote_average}</Text>

                                </View>

                                <View style={ styles.colorPlay } />
                                    
                                    <Icon 
                                        name="play-circle-sharp"
                                        size={ 25 }
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
    container:{
        marginTop: 5,
        marginBottom: 25, 
        paddingLeft: 5
    },
    img:{
        borderRadius: 20,
        height: 110, 
        width: 120, 
        marginHorizontal: 10
    },
    containerInfo: {
        position: 'absolute',
        bottom: 2,
        right: 15,
        width: 110,
        height: 35,
        backgroundColor:'#7E7C84',
        borderRadius: 20,
        opacity: 0.9,
        
      },
    title: {
        color: '#FFF',
        fontSize: 6.5,
        fontWeight: '600',
        left: 10,
        top: 4,
        width: 70
    },
    iconPlay: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        borderRadius: 50,
      },
      colorPlay: {
        backgroundColor: '#FF722A',
        height: 10,
        width: 10,
        position: 'absolute',
        bottom: 11,
        right: 10
      },
      containerStart: { 
        flexDirection: 'row',
        alignItems: 'center', 
        left: 11,
        bottom: 2,
        position:'absolute'

    }
});
