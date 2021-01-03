import { call, put, takeEvery } from 'redux-saga/effects';
import { api, Notify } from 'services';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginGuard } from 'services/api/auth/guards';
import { loginSuccess, loginFail, logoutSuccess } from './reducer';
import { ILoginRequestPayload } from './types';

// =============================================================:
function* loginRequestWorker(action: PayloadAction<ILoginRequestPayload>) {
	const { payload } = action;

	try {
		const response: LoginGuard = yield call(api.auth.login, payload);
		yield put(loginSuccess(response.data));
		Notify.success('Login success!');
	} catch (error) {
		yield put(loginFail());

		if (error.response) {
			Notify.error(error.response.data.message);
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
		yield put(loginFail());
		if (error.response) {
			Notify.error(error.response.data.message);
		}
	}
}

// =============================================================:

export function* authSaga() {
	yield takeEvery('@@auth/loginRequest', loginRequestWorker);
	yield takeEvery('@@auth/logoutRequest', logoutRequestWorker);
}
