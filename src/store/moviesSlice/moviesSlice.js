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
        onSetpopular: ( state, { payload }) => {
            state.popular = payload
        },
        onSetyouMayLike: ( state, { payload }) => {
            state.youMayLike = payload   
            
        },
    }
});

export const { 
    onSetTopRated,
    onSetpopular,
    onSetyouMayLike
} = moviesSlice.actions;