import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actions";


export const removeFromFavorites = async (dispatch, id) => {
    try {
        dispatch({ type: REMOVE_FROM_FAVORITES, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const addToFavorites = async (dispatch, meal) => {
    try {
        dispatch({ type: ADD_TO_FAVORITES, payload: meal });
    } catch (error) {
        console.log(error);
    }
}