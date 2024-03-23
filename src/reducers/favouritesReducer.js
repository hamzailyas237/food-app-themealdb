
import { ADD_TO_FAVORITES, LOAD_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/actions";

export const favouritesReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            // Check if the item is already in favorites
            if (state?.favorites?.some(item => item.idMeal === action.payload.idMeal)) {
                return state;
            }
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state?.favorites?.filter(item => item.idMeal !== action.payload)
            }
        case LOAD_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };
        default:
            return state;
    }
}
