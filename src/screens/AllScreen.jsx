import { FlatList, StyleSheet, Text, View } from "react-native"
import { ViewMovieAll } from "../components"
import { useMoviesStore } from "../hooks/useMoviesStore"


export const AllScreen = () => {

  const { savedMovies } = useMoviesStore()

  return (

    <View style={{ paddingHorizontal: 20, flex: 1, backgroundColor: '#1F1C2C'  }}>
      <Text style={ styles.title }>All</Text>
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
      top: 15,
      marginBottom: 10,
      fontWeight: '600',
      left: 20
    }
});
