import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { SvgXml } from 'react-native-svg'
import movieLogo from "../assets/movieLogo";


export const SplashScreen = ({ navigation }) => {

  const opacity = useRef( new Animated.Value(0) ).current;
  const top = useRef( new Animated.Value(-150) ).current;

  const fadeOut = () => {
  
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }
    ).start();

    Animated.timing(
      top,
      {
        toValue: -150,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();

  };


  setTimeout(() => {
    fadeOut()
    navigation.navigate('LoginScreen')
  }, 3000);

  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Animated.View style={{ 
        ...styles.animate, 
        opacity,
        transform: [{
          translateY: top
        }]
      }} />

        <SvgXml 
            xml={ movieLogo } 
            width={222} 
            height={222} 
            style={{ marginTop: 5, marginRight: 10}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  animate: {
    width: 30,
    height: 30
  }
})

