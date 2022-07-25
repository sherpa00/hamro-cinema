import { createSlice } from "@reduxjs/toolkit";

export const nowshowingSlice = createSlice({
    name: "nowshowing",
    initialState: {
        nowshowing: []
    },
    reducers: {
        addNowShowing: (state,action) => {
            state.nowshowing = action.payload;
        },
        removeNowShowing: (state,action) => {
            let temp = state.nowshowing;
            temp.splice(action.payload,1);
            state.nowshowing = temp;
        },
        removeAllNowShowing: (state) => {
            state.nowshowing = [];
        }
    }
});

export const {addNowShowing,removeNowShowing,removeAllNowShowing} = nowshowingSlice.actions;
export default nowshowingSlice.reducer;