import { Text, Image, StyleSheet, Pressable, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Icon  from 'react-native-vector-icons/Ionicons';
import { useMoviesStore } from '../hooks/useMoviesStore';


export const ViewMovieAll = ({ movie  }) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation();

    const { savedMovies, startDeleteSaved, startGetMovieId } = useMoviesStore();

    const handleDelete = () => {

        const newSave =  savedMovies.filter( mov => (
            mov.id !== movie.id
        ))

        startDeleteSaved(newSave)
    }


  return (


    
    <View 
        
        style={{ borderRadius: 18, flex: 1 }}
    >
        {
        movie?.poster_path && 
            (
                <TouchableOpacity 
                    onPress={ () => {
                        navigation.navigate( 'DetailsScreen', movie )
                        startGetMovieId(movie.id)
                    }}  
                    style={styles.container}
                >

                    <Image 
                        source={{ uri }}
                        style={ styles.img }
                        resizeMode='stretch'
                    />

                    <View style={ styles.containerInfo }>

                        <Text style={ styles.title }>{movie.title}</Text>

                        <TouchableOpacity 
                            onPress={ handleDelete }
                            style={ styles.save }>
                            <Icon 
                                name="close-circle"
                                color="#FFF"
                                size={ 20 } 
                            />
                        </TouchableOpacity>

                        <Text style={ styles.detail }>{movie.original_language} |  | {movie?.runtime ?? "120"}min</Text>

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

                </TouchableOpacity>
            )
        }
        
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20, 
        backgroundColor: '#62606B', 
        borderRadius: 20,
        height: 140,
        marginVertical: 20,
        padding: 10,
        flexDirection: 'row',
        opacity: 0.9 
      },
    img: {
        borderRadius: 20,
        flex: 1,
        width: 150,
    },
    containerInfo: {
       width: 200
    },
    title: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
        left: 10,
        top: 10, 
        width: 140
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
        width: 43,
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
        top: 30,
        width: 120,
        left: 10,
        textTransform : 'uppercase'
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