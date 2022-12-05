import { FlatList, StyleSheet, Text, View } from "react-native";

import Icon  from 'react-native-vector-icons/Ionicons';

import { ViewMovieGenre } from "../components";
import { useMoviesStore } from "../hooks/useMoviesStore";


export const MoviesGenresScreen = ({ route, navigation }) => {

  const { moviesGenres, startActiveGenre } = useMoviesStore()

  const { params } = route;



  return (
    <View>
        
        <FlatList
          data={moviesGenres} 
          keyExtractor={ item => item.id }
          renderItem={ ({ item }) => (
            <ViewMovieGenre movie={ item } genre={ params } /> 
          )}
          ListHeaderComponent={ () => (
            <>
              <Icon 
                name="arrow-back-outline"
                size={ 30 }
                color="#FFF"
                style={ styles.back }
                onPress={ () => {
                  navigation.navigate('HomeScreen')
                  startActiveGenre(0)
                }}
              />
              <Text style={ styles.title}>{params}</Text>
            </>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  title: { 
    color: '#FFF', 
    fontSize: 20, 
    fontWeight: '700',
    left: 20,
    marginTop: 20
  },
  back: {
    top: 10,
    left: 15
  }
})

