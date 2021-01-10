import { call, put, takeEvery } from 'redux-saga/effects';
import { api, Notify } from 'services';
import { PayloadAction } from '@reduxjs/toolkit';
import { loginSuccess, authFail, logoutSuccess, authErrors } from './reducer';
import { ILoginRequestPayload, IUserLogin } from './types';

// =============================================================:
function* loginRequestWorker(action: PayloadAction<ILoginRequestPayload>) {
	const { payload } = action;

	try {
		const response: IUserLogin = yield call(api.auth.login, payload);
		yield put(loginSuccess(response));
		Notify.success('Login success!');
	} catch (error) {
		yield put(authFail());

		if (error.response) {
			Notify.error(error.response.data.message);
		}
	}
}

// =============================================================:
function* registrationRequestWorker(action: PayloadAction<any>) {
	const { payload } = action;

	try {
		const response: any = yield call(api.auth.registration, payload); // LoginGuard
		yield put(loginSuccess(response.data));
		Notify.success('Registration success!');
	} catch (error) {
		yield put(authFail());

		if (error.response) {
			Notify.error(error.response.data.message);
			yield put(authErrors(error.response.data.errors));
		}
	}
}

// =============================================================:
function* logoutRequestWorker() {
	try {
		yield call(api.auth.logout);
		yield put(logoutSuccess());
		Notify.success('Logout success!');
	} catch (error) {
		yield put(authFail());
		if (error.response) {
			Notify.error(error.response.data.message);
		}
	}
}

// =============================================================:

export function* authSaga() {
	yield takeEvery('@@auth/loginRequest', loginRequestWorker);
	yield takeEvery('@@auth/registrationRequest', registrationRequestWorker);
	yield takeEvery('@@auth/logoutRequest', logoutRequestWorker);
}
