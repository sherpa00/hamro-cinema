import { createSlice } from "@reduxjs/toolkit";

export const currentMovieSlice = createSlice({
    name: "currentMovie",
    initialState: {
        currentMovie: {}
    },
    reducers: {
        addCurrentMovie : (state,action) => {
            state.currentMovie = action.payload;
        }
    }
})

export const {addCurrentMovie} = currentMovieSlice.actions;
export default currentMovieSlice.reducer;