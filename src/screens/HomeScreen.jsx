import { useEffect } from "react"
import { Text, View, StyleSheet } from "react-native"

import { CarouselMovie, Filter, GenresOptions, ListMoviesHorizontalMedium, ListMoviesHorizontalSmall } from "../components";
import { Loading } from "../components/Loading";
import { useMoviesStore } from "../hooks/useMoviesStore";





export const HomeScreen = () => {

  const { loading, topRated, popular, youMayLike, startGetMovieDB, startGetMoviePopular, startGetYouMayLike } = useMoviesStore()

    useEffect(() => {
      const getMovie = async() => {
        await startGetMovieDB()
        await startGetMoviePopular()
        await startGetYouMayLike()
      }
      getMovie() 
    }, [])
    
    

  return (

      // <ScrollView>

        <View style={{ flex: 1 }}>
        

          {
            loading 
            ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 800}}>
                  <Loading />
                </View>
              )
            : (
                <View>

                  <Text style={ styles.user}>Hi, Luis</Text>

                  <GenresOptions />

                  <Filter />

                  <CarouselMovie topRated={ topRated } />

                  <ListMoviesHorizontalMedium movie={ popular } title="Popular" />

                  <ListMoviesHorizontalSmall movie={ youMayLike } title="You may like" />
  
                 
                </View>
              )

          }      
          
        </View>

      // </ScrollView>

  )
}

const styles = StyleSheet.create({
    user: { 
      color: '#FFF',
      fontWeight: '700',
      fontSize: 20,
      marginHorizontal: 20,
      marginVertical: 10
    }
})