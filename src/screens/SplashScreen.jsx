import { useEffect } from "react";
import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { SvgXml } from 'react-native-svg'
import movieLogo from "../assets/movieLogo";
import { asyncStorage } from "../helpers/asyncStorage";
import { useAuthStore } from "../hooks/useAuthStore";


export const SplashScreen = ({ navigation }) => {

  const opacity = useRef( new Animated.Value(0) ).current;

  const { saveUserStorage, getUserStorage } = asyncStorage();

  const { users, user } = useAuthStore();

  useEffect(() => {
   
    getUserStorage() 

  }, [])

  useEffect(() => {

    if(users?.length > 0) {   
        saveUserStorage(users, user)
 
    }

  }, [users])

  const fadeIn = () => {
  
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }

  useEffect(() => {
    fadeIn()
  }, [])
  

  const fadeOut = () => {
  
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();

  };


  setTimeout(() => {
    fadeOut()
  }, 2000);

  setTimeout(() => {
    navigation.navigate('RegisterScreen')
  }, 4000);

  return (
      <Animated.View style={{ 
        ...styles.animate, 
        opacity,
      }}>

        <SvgXml 
            xml={ movieLogo } 
            width={222} 
            height={222} 
            style={{ marginTop: 5, marginRight: 10}}
        />
      </Animated.View>  
  )
}

const styles = StyleSheet.create({
  animate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

