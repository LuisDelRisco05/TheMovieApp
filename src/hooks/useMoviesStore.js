import {useDispatch, useSelector} from 'react-redux';
import {movieDB} from '../api/movieDB';
import {
  onSetTopRated,
  onSetpopular,
  onSetyouMayLike
} from '../store/moviesSlice/moviesSlice';

export const useMoviesStore = () => {

      const dispatch = useDispatch();

      const {
        topRated,
        loading,
        popular,
        youMayLike,
      } = useSelector(state => state.movies);
      

      const startGetMovieDB = async () => {
        try {
          const respTopRated = await movieDB.get(`/movie/top_rated`);
          const resultTopRated = respTopRated.data.results;

          dispatch( onSetTopRated(resultTopRated) );

        } catch (error) {
          console.log(error);
        }
      };
      

     

  return {
    //State
    topRated,
    loading,
    popular,
    youMayLike,

    //Functions
    startGetMovieDB,
  
  };
};
