import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Icon  from "react-native-vector-icons/Ionicons";
import { ViewMovieGenre } from "../components";
import { useAuthStore } from "../hooks/useAuthStore";
import { useMoviesStore } from "../hooks/useMoviesStore";

export const SearchScreen = () => {

  const { search, startGetSetSearch} = useMoviesStore();

  const [ view, setView ] = useState(false);

  const { user } = useAuthStore();

  return (

    <View style={{ paddingLeft: 22, flex: 1, backgroundColor: '#1F1C2C' }}>

        <Text style={ styles.user}>Hi, {user.name}</Text>

        <TextInput 
          placeholder="Search movies"
          placeholderTextColor='#DDDDDD'
          cursorColor='#FFF'
          style={ styles.searchInput }
          onChangeText={ (keyword) => {
            startGetSetSearch(keyword)
            keyword.trim() === '' && setView(false) 
          }}
        />
         
          <Pressable 
            style={ styles.btn }
            onPress={ () => setView( true ) }
          >
              
            <Icon 
              name="search-outline"
              size={ 23 }
              color="#FFF"
              style={ styles.iconSearch }
            />
          </Pressable>

        {
          view &&
          (
            <View style={{ flex: 1, paddingBottom: 70}}>
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
                 

      </View>
  )
}

const styles = StyleSheet.create({
  user: { 
    color: '#FFF',
    fontWeight: '700',
    fontSize: 24,
    marginVertical: 12
  },
  searchInput:{
    backgroundColor: 'rgba(196, 196, 196, 0.8)',
    width: 293,
    paddingLeft: 20,
    borderRadius: 59,
    zIndex: 4,
    color: '#FFF',
    fontWeight: '300',
    marginBottom: 10,
    opacity: 0.5,
    fontSize: 13,
    height: 37
  },
  iconSearch:{
    bottom: 1,
    left: 2,
    zIndex: 5,
    width: 30,
  },
  btn: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 4,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF722A',
    borderRadius: 30
  }
})
