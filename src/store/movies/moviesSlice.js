import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        loading: true,
        topRated:[],
        movieId:{},
        popular:[],
        youMayLike:[],
        activeGenre: 0,
        moviesGenres: [],
        moviesDetails: {},
        search:[],
        infoVideos:[],
        cast:[],
        similarMovie:[],
        savedMovies: []
    },  
    reducers: {
        onSetLoading: ( state, { payload } ) => {
            state.loading = payload 
        },  
        onSetTopRated: ( state, { payload } ) => {
            state.topRated = payload
            state.loading = false 
        },
        onSetMovieId: ( state, { payload }) => {
            state.movieId = payload
        },
        onSetPopular: ( state, { payload }) => {
            state.popular = payload
        },
        onSetYouMayLike: ( state, { payload }) => {
            state.youMayLike = payload          
        },
        onSetActiveGenre: ( state, { payload }) => {
            state.activeGenre = payload
        },
        onSetMoviesGenres: ( state, { payload }) => {
            state.moviesGenres = payload
        },
        onSetMoviesDetails: ( state, { payload }) => {
            state.moviesDetails = payload
        },
        onSetSearch:( state, { payload }) => {
            state.search = payload
        },
        onSetInfoVideos: ( state, { payload }) => {
            state.infoVideos = payload  
            
        },
        onSetCast: ( state, { payload }) => {
            state.cast = payload
        },
        onSetSimilarMovie: ( state, { payload }) => {
            state.similarMovie = payload
        },
        onReset: ( state ) => {
            state.infoVideos=[],
            state.moviesGenres= [],
            state.moviesDetails={},
            state.cast=[],
            state.similarMovie=[],
            state.search=[]
        },
        onSetSavedMovies: ( state, { payload }) => {
            state.savedMovies = payload
        },
        onSetDeleteSavedMovies: ( state, { payload }) => {
            state.savedMovies = payload
        },
        


    }
});

export const { 
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
    onReset,
    onSetSavedMovies,
    onSetDeleteSavedMovies
} = moviesSlice.actions;