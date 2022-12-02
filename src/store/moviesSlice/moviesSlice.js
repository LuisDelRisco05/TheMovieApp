import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        topRated:[],
        movieId:{},
        loading: true,
        popular:[],
        youMayLike:[],
        activeGenre: 0,
        moviesGenres: [],
        moviesDetails: {},
        search:[],
        infoVideos:[],
        cast:[],
        similarMovie: [],
    },  
    reducers: {
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
            state.loading = false  
            
        },
        onSetCast: ( state, { payload }) => {
            state.cast = payload
        },
        onSetSimilarMovie: ( state, { payload }) => {
            state.similarMovie = payload
        },
        onReset: ( state ) => {
            state.movieId={},
            state.infoVideos=[],
            state.moviesDetails={},
            state.cast=[],
            state.similarMovie=[],
            state.search=[]
        },

    }
});

export const { 
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
} = moviesSlice.actions;