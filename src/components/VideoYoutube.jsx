import { useState } from "react";
import { Image, LogBox, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";

import YoutubePlayer from "react-native-youtube-iframe";
import Icon  from "react-native-vector-icons/Ionicons";

import { useMoviesStore } from "../hooks/useMoviesStore";

LogBox.ignoreLogs(['SerializableStateInvariantMiddleware']);

export const VideoYoutube = ({ infoVideos, moviesDetails, movie }) => {

    const [ watch, setWatch ] = useState(false);

    const navigation =  useNavigation();

    const { startSavedMovies, startReset } = useMoviesStore();

    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;

    
  return (
        <View style={{ paddingTop: 10, backgroundColor: '#1F1C2C', marginHorizontal: 18}}>

            <TouchableOpacity
                style={{ width: 50 }}
                onPress={ () => {
                    navigation.navigate('HomeScreen')
                    startReset()
                }}
            >
                <Icon 
                  name="arrow-back-outline"
                  size={25}
                  color="#FFF"
                    
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{ right: 20, position: 'absolute', marginTop: 15, opacity: 0.8 }} 
                onPress={ () => {
                    startSavedMovies( moviesDetails )
                    startReset()
                    navigation.navigate('AllScreen') 
                }}
                activeOpacity={ 0.8 }
            >
                <Icon 
                    name="bookmark-outline"
                    size={20}
                    color="#FFF"
                    
                />    
            </TouchableOpacity> 
            

            <View 
                style={{ width: 340, height: 240  }}
            >
                {
                    !watch ? 
                    (
                        <View style={{ height: 250, top: 5 }}>
                            <Image 
                                source={{ uri }}
                                style={ styles.img }
                                resizeMode='cover'
                            />
                            <View style={ styles.containerInfo }>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>

                                <Icon 
                                    name="star-sharp"
                                    size={ 15 }
                                    color="#FFCE31"
                                />
                                <Text style={{ color: '#FFF', marginLeft: 3}}>{(moviesDetails?.vote_average ?? '').toString().slice(0,3)}</Text>

                                </View>

                                <TouchableOpacity 
                                    onPress={ () =>  setWatch(!watch) }
                                    style={ styles.containerPlay }
                                >
                                    <View style={ styles.colorPlay } />
                                    <Icon 
                                        name="play-circle-sharp"
                                        size={ 35 }
                                        color="#FFF"
                                        style={ styles.iconPlay }
                                    />
                                    <Text style={ styles.watch }>Watch now</Text>
                                </TouchableOpacity >

                            </View>
                        </View>
                    )
                    :(
                        <View style={{ top: 15 }}>
                            <YoutubePlayer
                                height={250}
                                play={false}
                                videoId={ infoVideos?.length === 2 ? infoVideos[1]?.key : infoVideos[0]?.key }
                        
                            />
                        </View>
                    )

                }
                
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    img: {
        borderRadius: 39,
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
    },
    containerPlay: {
        position: 'absolute',
        bottom: 20,
        right: - 10,
        backgroundColor: '#7E7C84',
        height: 35,
        width: 143,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        opacity: 0.7
    },
    iconPlay: {
        position: 'absolute',
        bottom: -2,
        right: 107,
        borderRadius: 50,
        },
    colorPlay: {
        backgroundColor: '#FF722A',
        height: 17,
        width: 16.5,
        position: 'absolute',
        bottom: 8,
        right: 117,
        opacity: 0.8,
        borderRadius: 20
    },
    watch: {
        top: 7,
        fontSize: 18,
        color: '#FFF',
        left: 45,
        width: 100,
        fontWeight: '400'
    }
  });
