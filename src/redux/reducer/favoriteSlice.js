import { createSlice } from "@reduxjs/toolkit";


const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: [],
    reducers: {
        addFavourite: (state, action) => {
            // add a new favourite to the list
            state.push(action.payload);
        },
        removeFavourite: (state, action) => {
            // remove a favourite from the list by filtering it out
            return state.filter(flavour => flavour!== action.payload);
        },
    },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions; //export actions for use in components

export default favouriteSlice.reducer; //export the reducer for use in the Redux store