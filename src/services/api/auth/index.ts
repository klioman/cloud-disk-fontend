import { IToken, IUserAuth } from 'redux/reducers/auth/types';
import { http } from 'services/http';
import { endpoint } from '../endpoints';
import { IAuthApi } from './types';

// ==========================================:
export const auth: IAuthApi = {
	login: (payload) => {
		return http
			.post<IUserAuth>(endpoint.auth.LOGIN, payload)
			.then((response): IUserAuth => response.data);
	},

	registration: (payload) => {
		return http
			.post<IUserAuth>(endpoint.auth.REGISTRATION, payload)
			.then((response): IUserAuth => response.data);
	},

	refreshToken: (payload) => {
		return http
			.post<IToken>(endpoint.auth.REFRESH_TOKEN, payload)
			.then((response): IToken => response.data);
	},

	logout: () => {
		return http.post(endpoint.auth.LOGOUT);
	},
};
