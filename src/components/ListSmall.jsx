import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native";

import Icon  from 'react-native-vector-icons/Ionicons';

import { useMoviesStore } from '../hooks/useMoviesStore';

export const ListSmall = ({ movie }) => {

    const navigation = useNavigation();

    const { startGetMovieId } = useMoviesStore();


    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`


  return (
            <Pressable 
                onPress={ () => {
                    navigation.navigate( 'DetailsScreen', movie )
                    startGetMovieId(movie.id)
                }}
            >
                {
                    movie?.backdrop_path && 
                    (
                        <View style={ styles.container }>

                            <Image    
                                source={{ uri }}
                                style={ styles.img }
                                resizeMode='cover'
                            />

                            <View style={ styles.containerInfo }>

                                <Text style={ styles.title }>{movie.title}</Text>

                                <View style={ styles.containerStart }>

                                    <Icon 
                                        name="star-sharp"
                                        size={ 9 }
                                        color="#FFCE31"
                                    />
                                    <Text style={ styles.vote }>
                                        {(movie.vote_average).toString().slice(0, 3)}
                                    </Text>

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
        height: 108, 
        width: 125, 
        marginHorizontal: 10
    },
    containerInfo: {
        position: 'absolute',
        bottom: 2,
        right: 15,
        width: 114,
        height: 35,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        left: 23        
      },
    title: {
        color: '#FFF',
        fontSize: 9,
        fontWeight: '400',
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
    },
    vote: { 
        color: '#FFF', 
        marginLeft: 3, 
        fontSize: 9,
        fontWeight: '400' 
    }
});
