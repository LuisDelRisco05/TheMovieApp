import { useEffect } from "react"
import { Text, View, StyleSheet } from "react-native"

import { Loading } from "../components/Loading"
import { useMoviesStore } from "../hooks/useMoviesStore"
import { 
  CarouselMovie, 
  Filter, 
  GenresOptions, 
  ListMoviesHorizontalMedium, 
  ListMoviesHorizontalSmall 
} from "../components"
import { useAuthStore } from "../hooks/useAuthStore"





export const HomeScreen = () => {

  

  const { user } = useAuthStore();

  const {
    loading,
    topRated,
    popular,
    youMayLike,
    activeGenre,
    startGetMovieDB,
    startActiveGenre,
    startMoviesGenre
  } = useMoviesStore();

    

  useEffect(() => {
    const getMovie = async() => {
      await startGetMovieDB()
    }
    getMovie() 
  }, [])
    
    

  return (

        <View style={{ flex: 1, backgroundColor: '#1F1C2C' }}>
        
          {
            loading 
            ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 800}}>
                  <Loading />
                </View>
              )
            : (
                <View>

                  <Text style={ styles.user}>Hi, {user.name}</Text>

                  <GenresOptions 
                    activeGenre={ activeGenre} 
                    startActiveGenre={ startActiveGenre } 
                    startMoviesGenre={ startMoviesGenre }
                  />

                  <Filter />

                  <CarouselMovie topRated={ topRated } />

                  <ListMoviesHorizontalMedium movie={ popular } title="Popular" />

                  <ListMoviesHorizontalSmall movie={ youMayLike } title="You may like" />
                 
                </View>
              )
          }      
        
        </View>
  )
}

const styles = StyleSheet.create({
    user: { 
      color: '#FFF',
      fontSize: 24,
      fontWeight: '700',
      marginHorizontal: 20,
      marginVertical: 10
    }
})