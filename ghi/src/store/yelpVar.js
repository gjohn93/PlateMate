import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zipcode : "", budget: 0, datetime: "", takeInOut: "", categories: []
}

export const yelpVar = createSlice({
    name: 'yelp',
    initialState,
    reducers: {
        storeYelp : (state,action) =>
            {state.yelp = action.payload["zipcode"]},
        clearForm: () => { return initialState }
        }
    }
)

export const {storeYelp, clearForm} = yelpVar.actions;

export default yelpVar.reducer;
