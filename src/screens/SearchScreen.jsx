import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Icon  from "react-native-vector-icons/Ionicons";
import { ViewMovieGenre } from "../components";
import { useMoviesStore } from "../hooks/useMoviesStore";

export const SearchScreen = () => {

    const { search, startGetSetSearch} = useMoviesStore();

  return (

    <View style={{ paddingHorizontal: 20, flex: 1, backgroundColor: '#1F1C2C'  }}>

        <Text style={ styles.user}>Hi, Luis</Text>

        <TextInput 
            placeholder="Seach movies"
            placeholderTextColor='#BFBFC2'
            cursorColor='#FFF'
            style={ styles.searchInput }
            onChangeText={ (keyword) => {
              startGetSetSearch(keyword)
            }}
          />
         
          <Pressable 
            style={ styles.iconCancel }
            onPress={ () => {
              
            }}
          >
              
            <Icon 
              name="search-outline"
              size={ 27 }
              color="#FFF"
              style={ styles.iconSearch }
            />
          </Pressable>

        <FlatList 
          data={ search }
          keyExtractor={ item => item.id }
          renderItem={ ({ item }) => (
            <ViewMovieGenre movie={ item } />
          )}
          showsVerticalScrollIndicator={ false }
        />
                 

      </View>
  )
}

const styles = StyleSheet.create({
  user: { 
    color: '#FFF',
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 12
  },
  searchInput:{
    backgroundColor: '#7E7C84',
    width: 300,
    paddingLeft: 20,
    borderRadius: 30,
    zIndex: 4,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 10
  },
  iconSearch:{
    top: 1,
    left: 2,
    zIndex: 5,
    width: 30,
  },
  iconCancel: {
    position: 'absolute',
    top: 55,
    right: 20,
    zIndex: 4,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF722A',
    borderRadius: 30
  }
})
