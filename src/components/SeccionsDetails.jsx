import { StyleSheet, Text, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';


export const SeccionsDetails = ({ movie, moviesDetails }) => {

    const year = moviesDetails?.release_date;

  return (

        <>   
            <View style={ styles.containerSectionOne }>

              <Text style={ styles.title }>{movie.title}</Text>

              <View style={{ alignItems: 'center', marginRight: 20, marginTop: 5 }}>
                      
                <Text style={{color: '#9D9D9F', fontSize: 12}}>
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
      marginTop: 20,
    },
    containerSectionTwo: {
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
    },
    title: {
        color: '#E2E2E3',
        fontSize: 22,
        fontWeight: '600',
    },
})
