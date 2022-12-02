import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {movieDB} from '../api/movieDB';
import { getEnvVariables } from '../helpers/getEnvVariables';
import {
  onSetTopRated,
  onSetMovieId,
  onSetPopular,
  onSetYouMayLike,
  onSetActiveGenre,
  onSetMoviesGenres,
  onSetMoviesDetails,
  onSetSearch,
  onSetInfoVideos,
  onSetCast,
  onSetSimilarMovie,
  onReset
} from '../store/moviesSlice/moviesSlice';

export const useMoviesStore = () => {

      const dispatch = useDispatch();

      const {
        topRated,
        movieId,
        loading,
        popular,
        youMayLike,
        activeGenre,
        moviesGenres,
        moviesDetails,
        search,
        infoVideos,
        cast,
        similarMovie
      } = useSelector(state => state.movies);

      const { API_KEY } = getEnvVariables();

      const baseURL = 'https://api.themoviedb.org/3'; 

      const startGetMovieDB = async() => {
          try {
            const respTopRated = await movieDB.get(`/movie/top_rated`);
            const resultTopRated = respTopRated.data.results;

            dispatch( onSetTopRated(resultTopRated) );

          } catch (error) {
            console.log(error);
          }
      };

      const startGetMovieId = id => {
        dispatch( onSetMovieId(id) );
      };
      
      const startGetMoviePopular = async() => {
          try {

            const respPopular = await movieDB.get(`/movie/popular`);
            const resultPopular = respPopular.data.results;

            dispatch( onSetPopular(resultPopular) );
            
          } catch (error) {
            console.log(error);
          }
      }

      const startGetYouMayLike = async() => {
        try {

          const respYouMayLike = await movieDB.get(`/movie/now_playing`);
          const resultYouMayLike = respYouMayLike.data.results;

          dispatch( onSetYouMayLike(resultYouMayLike) );
          
        } catch (error) {
          console.log(error);
        }
      }

      const startActiveGenre =  id  => {
        dispatch( onSetActiveGenre( id ))
      }

      const startMoviesGenre = genre => {

        const { action, comedy, horror, opc }= genre;

        if( opc === 28){
          dispatch( onSetMoviesGenres(action) )
          return
        }
        if( opc === 35){
          dispatch( onSetMoviesGenres(comedy) )
          return
        }
        if( opc === 27){
          dispatch( onSetMoviesGenres(horror) )
          return
        }


      }

      const startGetSetSearch = async(keyword ) => {

        //* obtengo peliculas por palabra clave
        try {
          
          if(keyword){
            const resultSearch = await axios.get(`${baseURL}/search/movie?api_key=${API_KEY}&query=${keyword}`)
            const respSearch = resultSearch.data.results
            dispatch( onSetSearch(respSearch))
          }
          
        } catch (error) {
          console.log(error);
        }
        
      }

      const startGetInfoVideos = async () => {
        try {
          //* obtengo los videos
          const respInfoVideos = await movieDB.get(`/movie/${movieId}/videos`);
          
          //* obtengo los detalles de las peliculas
          const respMovieDetails = await movieDB.get(`/movie/${movieId}`);

          //* obtengo el casting
          const respCast = await movieDB.get(`/movie/${movieId}/credits`); 

          //* obtengo las peliculas similares
          const respSimilar = await movieDB.get(`/movie/${movieId}/similar`);
           
          const [ 
            resultInfoVideos, 
            resultMovieDetails, 
            resultCast, 
            resultSimilar 
          ] = await Promise.all([ respInfoVideos, respMovieDetails, respCast, respSimilar ])

          dispatch( onSetInfoVideos(resultInfoVideos.data.results) );
          dispatch( onSetMoviesDetails( resultMovieDetails.data) );
          dispatch( onSetCast(resultCast.data) )
          dispatch( onSetSimilarMovie(resultSimilar.data.results) )

        } catch (error) {
          console.log(error);
        }
      };

      //* resetear informacion de la pelicula
      const startReset = () => {
        dispatch( onReset() )
      }


     

  return {
    //State
    topRated,
    loading,
    popular,
    youMayLike,
    activeGenre,
    moviesGenres,
    moviesDetails,
    search,
    infoVideos,
    cast,
    similarMovie,

    //Functions
    startGetMovieDB,
    startGetMovieId,
    startGetMoviePopular,
    startGetYouMayLike,
    startActiveGenre,
    startMoviesGenre,
    startGetSetSearch,
    startReset,
    startGetInfoVideos
  };
};
