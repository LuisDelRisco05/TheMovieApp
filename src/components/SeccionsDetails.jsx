import { StyleSheet, Text, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';


export const SeccionsDetails = ({ movie, moviesDetails }) => {


  return (

        <>   
            <View style={ styles.containerSectionOne }>

              <Text style={ styles.title }>{movie.title}</Text>

              <View style={{ alignItems: 'center' }}>
                      
                <Text style={ styles.subtitulo }>
                  {moviesDetails.original_language} | { moviesDetails.genres && moviesDetails.genres[0].name } | {moviesDetails.runtime}m
                </Text>
                

              </View>

            </View>       
        </>
    
  )
}

const styles = StyleSheet.create({
    containerSectionOne: {
      marginHorizontal: 20,
      alignItems: 'center',
      marginBottom: 15,
    },
    containerSectionTwo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
        color: '#E2E2E3',
        fontSize: 18,
        fontWeight: '700',
    },
    subtitulo: {
      color: '#9D9D9F', 
      fontSize: 14, 
      fontWeight: '300',
      textTransform: 'uppercase'
    }
})
