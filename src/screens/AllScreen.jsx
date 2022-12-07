import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Icon  from "react-native-vector-icons/Ionicons";

import { ViewMovieAll } from "../components"
import { useMoviesStore } from "../hooks/useMoviesStore"


export const AllScreen = ({ navigation }) => {

  const { savedMovies } = useMoviesStore()

  return (

    <View style={{ flex: 1, backgroundColor: '#1F1C2C', paddingTop: 10  }}>
      <Text style={ styles.title }>Saved</Text>
        {
          savedMovies?.length > 0 &&
          (

            <FlatList 
              data={ savedMovies }
              keyExtractor={ (item, index) => item.id + index }
              renderItem={ ({ item }) => (

                <ViewMovieAll movie={ item } />

              )}
              showsVerticalScrollIndicator={ false }
            />
          )
        }
    </View>
  )
}

const styles = StyleSheet.create({
    title: { 
      color: '#FFF',
      fontSize: 20,
      top: 0,
      marginBottom: 10,
      fontWeight: '600',
      left: 40
    }
});
