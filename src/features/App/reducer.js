const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	isLogged: true,
	isAppLoaded: false
};


const appSlice = createSlice({
	name: 'APP',
	initialState,
	reducers: {
		isLogged: (state, action) => { state.isLogged = action.payload },
		isAppLoading: (state, action) => { state.isAppLoaded = action.payload }
	},

});


const {
	isLogged: setIsLoggedAction,
	isAppLoading: setIsAppLoadingAction
} = appSlice.actions;

export const setIsLogged = isLogged => dispatch => {
	dispatch(setIsLoggedAction(isLogged));
};

export const setIsAppLoading = isAppLoading => dispatch => {
	dispatch(setIsAppLoadingAction(isAppLoading));
}

export default appSlice.reducer;