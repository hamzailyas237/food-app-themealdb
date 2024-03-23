// FavoritesContext.js

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { favouritesReducer } from "../reducers/favouritesReducer";

const initialState = {
    favorites: [], // Renamed to "favorites" for consistency
}

const FavoritesContext = createContext({});
export const FavoritesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(favouritesReducer, initialState);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            dispatch({ type: 'LOAD_FAVORITES', payload: JSON.parse(storedFavorites) });
        }
    }, []);

    // Save favorites to localStorage whenever favorites state changes
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);

    return (
        <FavoritesContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
}
