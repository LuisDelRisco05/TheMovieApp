import {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';


import { useMoviesStore} from '../hooks/useMoviesStore';
import { Loading, VideoYoutube, ListCast, SeccionsDetails, ListMoviesHorizontalSmall } from '../components';


export const DetailsScreen = ({route}) => {
  const {
    loading,
    movieId,
    infoVideos,
    moviesDetails,
    cast,
    similarMovie,
    startGetInfoVideos,
    startReset,
  } = useMoviesStore();

  const movie = route.params;

  useEffect(() => {
    const video = async () => {
      await startGetInfoVideos();
    };
    video();
  }, [movieId]);

  return (

      <View style={{flex: 1}}>

        {loading 
          ? <Loading />
          :(
              <ScrollView>

                <View>

                  {/* Video de YouTube */}

                  <VideoYoutube infoVideos={infoVideos} startReset={startReset} moviesDetails={ moviesDetails } movie={movie} />

                  <SeccionsDetails movie={ movie } moviesDetails={ moviesDetails } />

                  <View style={styles.separator} />

                  {/* Sinopsis */}

                  <View style={{marginHorizontal: 20, height: 70, marginBottom: 20}}>

                    <Text style={ styles.title }>Story line</Text>
                    <Text style={{color: '#737278', fontSize: 11, textAlign: 'justify'}}>{moviesDetails.overview}</Text>

                  </View>

                  {/* Cast */}

                  <View style={{ height: 70, marginVertical: 20 }}>

                    <Text style={{ ...styles.title, marginLeft: 18 }}>Star cast</Text>

                    <View style={styles.containerCast}>

                      <ListCast cast={cast} />

                    </View>

                  </View>
                
                  {/* Recommended */}

                  <View style={{ marginTop: 10 }}>

                    <ListMoviesHorizontalSmall movie={similarMovie} title="Recommended" />

                  </View>

                  
                  

                </View>

              </ScrollView>
            )
      }

      </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#E2E2E3',
    height: 1,
    opacity: 0.1,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  genres: {
    borderRadius: 15,
    borderColor: '#B6B6B9',
    borderWidth: 1.2,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 1,
    marginTop: 4,
  },
  containerCast: {
    height: 85,
    marginBottom: 2,
    paddingTop: 10,
  },
  title: { 
    color: '#C5C4C7', 
    fontSize: 14, 
    marginBottom: 5, 
    fontWeight: '500' 
  }
});


