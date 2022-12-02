import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";

import YoutubePlayer from "react-native-youtube-iframe";
import Icon  from "react-native-vector-icons/Ionicons";

export const VideoYoutube = ({ infoVideos, startReset, moviesDetails }) => {

    const [ watch, setWatch ] = useState(false)

    const navigation =  useNavigation();

    const uri = `https://image.tmdb.org/t/p/w500${ moviesDetails.poster_path }`
    
  return (
        <View style={{ paddingTop: 10, backgroundColor: '#1F1C2C', marginHorizontal: 20}}>
            <Icon 
                name="arrow-back-outline"
                size={25}
                color="#FFF"
                style={{ width: 50, opacity: 0.6 }}
                onPress={ () => {
                    navigation.goBack()
                    startReset()
                }}
            />
            <Icon 
                name="bookmark-outline"
                size={20}
                color="#FFF"
                style={{ right: 20, position: 'absolute', marginTop: 15, opacity: 0.8 }}
            /> 
            

            <View 
                style={{ borderRadius: 18 }}
            >
                {
                    !watch ? 
                    (
                        <View style={{ height: 250, top: 15 }}>
                            <Image 
                                source={{ uri }}
                                style={ styles.img }
                                resizeMode='stretch'
                            />
                            <View style={ styles.containerInfo }>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20}}>

                                <Icon 
                                    name="star-sharp"
                                    size={ 15 }
                                    color="#FFCE31"
                                />
                                <Text style={{ color: '#FFF', marginLeft: 3}}>{moviesDetails.vote_average}</Text>

                                </View>

                                <TouchableOpacity 
                                    onPress={ () =>  setWatch(!watch) }
                                    style={ styles.containerPlay }
                                >
                                    <View style={ styles.colorPlay } />
                                    <Icon 
                                        name="play-circle-sharp"
                                        size={ 52 }
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
        borderRadius: 30,
        height: 210,
        width: 350,
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
        bottom: 10,
        right: -20,
        backgroundColor: '#7E7C84',
        height: 50,
        width: 170,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        opacity: 0.7
    },
    iconPlay: {
        position: 'absolute',
        bottom: -3,
        right: 118,
        borderRadius: 50,
        },
    colorPlay: {
        backgroundColor: '#FF722A',
        height: 17,
        width: 16.5,
        position: 'absolute',
        bottom: 17,
        right: 137,
        opacity: 0.8,
        borderRadius: 5
    },
    watch: {
        top: 13,
        fontSize: 20,
        color: '#FFF',
        left: 50,
        width: 100
    }
  });
