import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        topRated:[],
        loading: true,
        popular:[],
        youMayLike:[],
    },  
    reducers: {
        onSetTopRated: ( state, { payload } ) => {
            state.topRated = payload
            state.loading = false 
        },
        onSetPopular: ( state, { payload }) => {
            state.popular = payload
        },
        onSetYouMayLike: ( state, { payload }) => {
            state.youMayLike = payload   
            
        },
    }
});

export const { 
    onSetTopRated,
    onSetPopular,
    onSetYouMayLike
} = moviesSlice.actions;