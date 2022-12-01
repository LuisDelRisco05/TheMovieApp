import { useEffect } from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"

import { CarouselMovie } from "../components/CarouselMovie";
import { Loading } from "../components/Loading";
import { useMoviesStore } from "../hooks/useMoviesStore";





export const HomeScreen = () => {

  const { topRated, loading, startGetMovieDB } = useMoviesStore()

    useEffect(() => {
      const getMovie = async() => {
        await startGetMovieDB()
      }
      getMovie() 
    }, [])
    
    

  return (

      <ScrollView>

        <View style={{ flex: 1, backgroundColor: 'red', }}>
        

          {
            loading 
            ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 800}}>
                  <Loading />
                </View>
              )
            : (
                <View>

                  <CarouselMovie topRated={ topRated } />
                 
                </View>
              )

          }      
          
        </View>

      </ScrollView>

  )
}

const styles = StyleSheet.create({

})