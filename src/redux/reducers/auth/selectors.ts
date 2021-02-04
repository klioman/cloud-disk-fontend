import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from 'redux/types';
import { IAuthStore } from './types';

const getAuthState = (state: IStoreState): IAuthStore => state.authReducer;
export const getAuth = createSelector([getAuthState], (auth: IAuthStore) => auth);

// ====================================================:
export const getAuthIsAuthenticated = createSelector(
	[getAuth],
	(auth: IAuthStore): boolean => !!(auth.isAuthenticated && auth.token?.accessToken),
);

// ====================================================:
export const getAuthIsNotAuthenticated = createSelector(
	[getAuth],
	(auth: IAuthStore): boolean => !auth.isAuthenticated && !auth.token?.accessToken,
);

// ====================================================:
export const getAuthIsLoad = createSelector(
	[getAuth],
	(auth: IAuthStore): boolean => auth.isAuthLoader,
);

// ====================================================:
export const getLogOutUserToken = createSelector(
	[getAuth],
	(auth: IAuthStore): string | undefined => auth.token?.accessToken,
);

// ====================================================:
export const getAuthTokenRefresh = createSelector(
	[getAuth],
	(auth: IAuthStore): string => auth.token?.refreshToken as string,
);
