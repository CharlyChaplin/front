import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = [];


const addToFavoritesAction = createAction('FAVORITES/add');
const removeFromFavoritesAction = createAction('FAVORITES/remove');

const favoritesReducer = createReducer(initialState, builder => {
	// Добавить в избранное
	builder.addCase(
		addToFavoritesAction, (state, action) => (
			Array.from(new Set([...state, action.payload]))
		)
	)

	// Удалить из избранного
	builder.addCase(
		removeFromFavoritesAction, (state, action) => (
			state.filter(i => i !== action.payload)
		)
	)
});

export const addToFavorites = favoriteId => dispatch => {
	dispatch(addToFavoritesAction(favoriteId));
};
export const removeFromFavorites = favoriteId => dispatch => {
	dispatch(removeFromFavoritesAction(favoriteId));
};

export default favoritesReducer;