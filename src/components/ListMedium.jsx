import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";

import Icon  from 'react-native-vector-icons/Ionicons';

import { useMoviesStore } from '../hooks/useMoviesStore';

export const ListMedium = ({ movie }) => {

    const navigation = useNavigation();

    const { startGetMovieId } = useMoviesStore();


    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`

    return (

        <TouchableOpacity 
            onPress={ () => {
                startGetMovieId(movie.id)
                navigation.navigate( 'DetailsScreen', movie )
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
                                size={ 27 }
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
    container:{
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 5,
    },
    img:{
        borderRadius: 25,
        height: 132, 
        marginHorizontal: 10,
        width: 153, 
    },
    containerInfo: {
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        bottom: 2,
        height: 42,
        position: 'absolute',
        right: 25,
        width: 140,
        left: 17
        
      },
    title: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: '400',
        left: 10,
        top: 3,
        width: 100
    },
    iconPlay: {
        borderRadius: 50,
        bottom: 2,
        position: 'absolute',
        right: 2,
      },
      colorPlay: {
        backgroundColor: '#FF722A',
        bottom: 11,
        height: 10,
        position: 'absolute',
        right: 10,
        width: 10,
      },
      containerStart: { 
        alignItems: 'center', 
        bottom: 2,
        flexDirection: 'row',
        left: 11,
        position:'absolute'
    },
    vote: { 
        color: '#FFF', 
        marginLeft: 3, 
        fontSize: 11, 
        fontWeight: '400' 
    }
});
