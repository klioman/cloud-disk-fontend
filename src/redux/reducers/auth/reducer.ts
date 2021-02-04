import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	IToken,
	IAuthStore,
	ILoginSuccessPayload,
	ILoginRequestPayload,
	IRegistrationSuccessPayload,
	IRegistrationRequestPayload,
} from './types';

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
		authFail: () => initialState,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		registrationRequest: (state, action: PayloadAction<IRegistrationRequestPayload>) => {
			const registrationRequestState = state;

			registrationRequestState.isAuthLoader = true;
		},
		registrationSuccess: (state, action: PayloadAction<IRegistrationSuccessPayload>) => {
			const { payload } = action;
			const registrationSuccessState = state;

			registrationSuccessState.isAuthenticated = true;
			registrationSuccessState.isAuthLoader = false;
			registrationSuccessState.token = payload.tokens;
		},
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
	registrationRequest,
	registrationSuccess,
	logoutRequest,
	authFail,
	logoutSuccess,
	refreshTokenSuccess,
} = authReducer.actions;
