import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToken, IAuthStore, ILoginSuccessPayload, ILoginRequestPayload } from './types';

export const initialState: IAuthStore = {
	isAuthLoader: false,
	isLogoutLoader: false,
	isAuthenticated: false,
	userPermissions: [],
	token: null,
};

const authReducer = createSlice({
	name: '@@auth',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		loginRequest: (state, action: PayloadAction<ILoginRequestPayload>) => {
			const loginRequestState = state;

			loginRequestState.isAuthLoader = true;
		},
		loginSuccess: (state, action: PayloadAction<ILoginSuccessPayload>) => {
			const { payload } = action;
			const loginSuccessState = state;

			loginSuccessState.isAuthenticated = true;
			loginSuccessState.isAuthLoader = false;
			loginSuccessState.userPermissions = payload.permissions;
			loginSuccessState.token = payload.tokens;
		},
		loginFail: () => initialState,
		logoutRequest: (state) => {
			const logoutSuccessState = state;

			logoutSuccessState.isLogoutLoader = true;
		},
		logoutSuccess: () => initialState,
		refreshTokenSuccess: (state, action: PayloadAction<IToken>) => {
			const { payload } = action;
			const refreshTokenState = state;

			refreshTokenState.token = payload;
		},
	},
});

export default authReducer.reducer;

export const {
	loginRequest,
	loginSuccess,
	logoutRequest,
	loginFail,
	logoutSuccess,
	refreshTokenSuccess,
} = authReducer.actions;
