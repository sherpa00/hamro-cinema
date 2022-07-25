import { createSlice } from "@reduxjs/toolkit";

export const TokenSlice = createSlice({
    name: "token",
    "initialState": {
        token: ""
    },
    reducers: {
        addToken: (state,action) => {
            state.token = action.payload;
        }
    }
})

export const {addToken} = TokenSlice.actions;
export default TokenSlice.reducer;