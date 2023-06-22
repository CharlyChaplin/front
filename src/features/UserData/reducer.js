import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	login: null,
	email: null,
	phone: null,
	nameFirst: null,
	nameLast: null,
	namePatronymic: null,
	displayName: null,
	birthDate: null,
	gender: null
};

const setUserDataAction = createAction('USER_DATA/set');

const userDataReducer = createReducer(initialState, builder => {
	builder.addCase(
		setUserDataAction, (_, { payload }) => payload
	)
});

export const setUserData = userData => dispatch => {
	dispatch(setUserDataAction(userData));
};

export default userDataReducer;