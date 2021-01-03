import { ALLOW_WINDOW_EXTENDS } from 'constants/env';
import { auth } from './auth';
import { IApi } from './types';

const api: IApi = {
	auth,
};

if (ALLOW_WINDOW_EXTENDS) {
	window.$api = api;
}

export { api };
