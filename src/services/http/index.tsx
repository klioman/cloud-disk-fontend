import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ALLOW_WINDOW_EXTENDS, WEB_API_URL } from 'constants/env';
import { loginFail, refreshTokenSuccess } from 'redux/reducers/auth/reducer';
import { getAuth, getAuthTokenRefresh } from 'redux/reducers/auth/selectors';
import { store } from 'redux/store';
import { api } from 'services/api';
import { Notify } from 'services/notify';
import responseErrors from './responseErrors';

// ==============================================:
const http: AxiosInstance = axios.create({
	baseURL: WEB_API_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

// ==============================================:
const requestInterceptorOnSuccess = (config: AxiosRequestConfig) => {
	const requestConfig = config;
	const state = store.getState();
	const auth = getAuth(state);

	if (auth && auth.token) {
		requestConfig.headers.Authorization = `Bearer ${auth.token.accessToken}`;
	}

	return requestConfig;
};

http.interceptors.request.use(requestInterceptorOnSuccess);

// ==============================================:
const responseInterceptorOnSuccess = (response: AxiosResponse): AxiosResponse => response;

const responseInterceptorOnError = (error: AxiosError) => {
	const status = error.response ? error.response.status : null;
	const errorResponse = error;

	if (status === 401) {
		const state = store.getState();

		return api.auth
			.refreshToken({ refreshToken: getAuthTokenRefresh(state) })
			.then((response) => {
				store.dispatch(refreshTokenSuccess(response.data));

				errorResponse.config.headers.Authorization = `Bearer ${response.data.accessToken}`;
				errorResponse.config.baseURL = undefined;

				return http.request(errorResponse.config);
			})
			.catch((error) => {
				store.dispatch(loginFail());
				Notify.error(error.response.data.message);
			});
	}

	if (status !== 401) {
		responseErrors(error);
	}

	return Promise.reject(error);
};

http.interceptors.response.use(responseInterceptorOnSuccess, responseInterceptorOnError);

// ==============================================:
if (ALLOW_WINDOW_EXTENDS) {
	window.$http = http;
}

// ==============================================:
export { http };
