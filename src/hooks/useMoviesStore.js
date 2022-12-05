import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {movieDB} from '../api/movieDB';
import { getEnvVariables } from '../helpers/getEnvVariables';
import {
  onSetLoading,
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
  onSetSavedMovies,
  onSetDeleteSavedMovies,
  onReset,
} from '../store/movies/moviesSlice';

export const useMoviesStore = () => {

      const dispatch = useDispatch();

      const {
        loading,
        topRated,
        movieId,
        popular,
        youMayLike,
        activeGenre,
        moviesGenres,
        moviesDetails,
        search,
        infoVideos,
        cast,
        similarMovie,
        savedMovies
      } = useSelector(state => state.movies);

      const { API_KEY } = getEnvVariables();

      const baseURL = 'https://api.themoviedb.org/3'; 

      const startGetMovieDB = async() => {
          try {
            //* obtenter movies mejor puntaje
            const respTopRated = await movieDB.get(`/movie/top_rated`);

            //* obtener peliculas populares
            const respPopular = await movieDB.get(`/movie/popular`);
      

            dispatch( onSetPopular(resultPopular) );
            //* obtener peliculas pueden gustarte
            const respYouMayLike = await movieDB.get(`/movie/now_playing`);

            const [ 
              resultTopRated,
              resultPopular, 
              resultYouMayLike 
            ] 
            = await Promise.all([ respTopRated, respPopular, respYouMayLike]);

            dispatch( onSetTopRated(resultTopRated.data.results) );
            dispatch( onSetPopular(resultPopular.data.results) );
            dispatch( onSetYouMayLike(resultYouMayLike.data.results) );
         

          } catch (error) {
            console.log(error);
          }
      };

      //* id de las pelicula seleccionada
      const startGetMovieId = id => {
        dispatch( onSetMovieId(id) );
      };
      
      
      //* id para identificar el genero de la pelicula
      const startActiveGenre =  id  => {
        dispatch( onSetActiveGenre( id ))
      }

      //* separar cada pelicula deacuerdo a su genero
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

      //* obtengo peliculas por palabra clave
      const startGetSetSearch = async(keyword ) => {

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

        dispatch( onSetLoading(true))
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
          dispatch( onSetLoading(false))

        } catch (error) {
          console.log(error);
        }
      };

      //* resetear informacion de la pelicula
      const startReset = () => {
        dispatch( onReset() )
      }

      //* guardar peliculas en saved
      const startSavedMovies = movies => {
        const saved = [...savedMovies, movies]
        dispatch( onSetSavedMovies( saved ) )
      }

      //* eliminar de la lista de saved
      const startDeleteSaved = movies => {
        dispatch( onSetDeleteSavedMovies( movies ))
      }


     

  return {
    //State
    loading,
    topRated,
    movieId,
    popular,
    youMayLike,
    activeGenre,
    moviesGenres,
    moviesDetails,
    search,
    infoVideos,
    cast,
    similarMovie,
    savedMovies,

    //Functions
    startGetMovieDB,
    startGetMovieId,
    startActiveGenre,
    startMoviesGenre,
    startGetSetSearch,
    startGetInfoVideos,
    startSavedMovies,
    startDeleteSaved,
    startReset,
  };
};
