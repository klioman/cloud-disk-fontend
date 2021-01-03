import { IToken, IUserLogin } from 'redux/reducers/auth/types';
import { http } from 'services/http';
import { endpoint } from '../endpoints';
import { LoginGuard } from './guards';
import { RefreshTokenGuard } from './guards/refreshToken';
import { IAuthApi } from './types';

export const auth: IAuthApi = {
	login: (payload) => {
		return http
			.post<{ data: IUserLogin }>(endpoint.auth.LOGIN, payload)
			.then((response): LoginGuard => new LoginGuard(response));
	},

	registration: (payload) => {
		return http
			.post<{ data: any }>(endpoint.auth.REGISTRATION, payload)
			.then((response): any => response);
	},

	refreshToken: (payload) => {
		return http
			.post<{ data: IToken }>(endpoint.auth.REFRESH_TOKEN, payload)
			.then((response): RefreshTokenGuard => new RefreshTokenGuard(response));
	},

	logout: () => {
		return http.post(endpoint.auth.LOGOUT);
	},
};
