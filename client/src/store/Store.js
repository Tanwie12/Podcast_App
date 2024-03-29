import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "./ThemeSlicer";
import { FavoriteValueReducer, cardReducer, cateoriesReducer, comedyReducer, crimeReducer, favoriteReducer, horrorReducer, newsReducer, sideBarReducer, sportReducer } from "./Sidebarslice";
import {authReducer} from "../slices/authSlice"
import { apiSlice } from "../slices/apiSlice";

// Here is a reference snippet of code from client\src\components\Drawerbar.jsx:    

export const store = configureStore({
  reducer: {
    theme:ThemeReducer,
    sidebar:sideBarReducer,
    card: cardReducer,
    crime: crimeReducer,
    sport: sportReducer,
    news:newsReducer,
    horror: horrorReducer,
    comedy: comedyReducer ,
    favorite:favoriteReducer,
    categories:cateoriesReducer, 
    FavoriteValue:FavoriteValueReducer,
    auth:authReducer,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true
})
