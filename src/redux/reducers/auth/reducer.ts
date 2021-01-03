import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToken, IAuthStore, ILoginSuccessPayload, ILoginRequestPayload } from './types';

export const initialState: IAuthStore = {
	isAuthLoader: false,
	isLogoutLoader: false,
	isAuthenticated: false,
	userPermissions: [],
	errorsList: [],
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
			loginRequestState.errorsList = [];
		},
		loginSuccess: (state, action: PayloadAction<ILoginSuccessPayload>) => {
			const { payload } = action;
			const loginSuccessState = state;

			loginSuccessState.isAuthenticated = true;
			loginSuccessState.isAuthLoader = false;
			loginSuccessState.userPermissions = payload.permissions;
			loginSuccessState.token = payload.tokens;
			loginSuccessState.errorsList = [];
		},
		authFail: () => initialState,
		authErrors: (state, action: any) => {
			const { payload } = action;
			const authErrorsState = state;

			authErrorsState.errorsList = payload.errors;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		registrationRequest: (state, action: any) => {
			const registrationRequestState = state;

			registrationRequestState.isAuthLoader = true;
			registrationRequestState.errorsList = [];
		},
		registrationSuccess: (state, action: PayloadAction<ILoginSuccessPayload>) => {
			const { payload } = action;
			const registrationSuccessState = state;

			registrationSuccessState.isAuthenticated = true;
			registrationSuccessState.isAuthLoader = false;
			registrationSuccessState.token = payload.tokens;
			registrationSuccessState.errorsList = [];
		},
		logoutRequest: (state) => {
			const logoutSuccessState = state;

			logoutSuccessState.isLogoutLoader = true;
			logoutSuccessState.errorsList = [];
		},
		logoutSuccess: () => initialState,
		refreshTokenSuccess: (state, action: PayloadAction<IToken>) => {
			const { payload } = action;
			const refreshTokenState = state;

			refreshTokenState.token = payload;
			refreshTokenState.errorsList = [];
		},
	},
});

export default authReducer.reducer;

export const {
	loginRequest,
	loginSuccess,
	registrationRequest,
	registrationSuccess,
	logoutRequest,
	authFail,
	authErrors,
	logoutSuccess,
	refreshTokenSuccess,
} = authReducer.actions;
