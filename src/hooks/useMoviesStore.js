import {useDispatch, useSelector} from 'react-redux';
import {movieDB} from '../api/movieDB';
import {
  onSetTopRated,
  onSetPopular,
  onSetYouMayLike
} from '../store/moviesSlice/moviesSlice';

export const useMoviesStore = () => {

      const dispatch = useDispatch();

      const {
        topRated,
        loading,
        popular,
        youMayLike,
      } = useSelector(state => state.movies);
      

      const startGetMovieDB = async() => {
          try {
            const respTopRated = await movieDB.get(`/movie/top_rated`);
            const resultTopRated = respTopRated.data.results;

            dispatch( onSetTopRated(resultTopRated) );

          } catch (error) {
            console.log(error);
          }
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

     

  return {
    //State
    topRated,
    loading,
    popular,
    youMayLike,

    //Functions
    startGetMovieDB,
    startGetMoviePopular,
    startGetYouMayLike
  };
};
