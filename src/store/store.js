import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesSlice/moviesSlice";

configureStore

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
})
