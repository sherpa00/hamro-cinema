import { createSlice } from "@reduxjs/toolkit";

export const upcomingSlice = createSlice({
    name: "upcoming",
    initialState: {
        upcoming: []
    },
    reducers: {
        addUpComing: (state,action) => {
            state.upcoming = action.payload;
        },
        removeUpComing: (state,action) => {
            let temp = state.upcoming;
            temp.splice(action.payload,1);
            state.upcoming = temp;
        },
        removeAllUpComing: (state) => {
            state.upcoming = [];
        }
    }
});

export const {addUpComing,removeUpComing,removeAllUpComing} = upcomingSlice.actions;
export default upcomingSlice.reducer;