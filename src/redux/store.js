import { configureStore } from "@reduxjs/toolkit";
// import favouriteReducer from './reducer/favoriteSlice'   // Your odl import.
import favouriteReducer from './reducer/favoriteSlice'

const store = configureStore({
    reducer: {
        favourites: favouriteReducer
    },  // we will add our reducer here 
   
});

export default store;