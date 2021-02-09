import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { api, Notify } from 'services';
import { loginSuccess, authFail, logoutSuccess } from './reducer';
import { ILoginRequestPayload, IUserAuth } from './types';

// =============================================================:
function* loginRequestWorker(action: PayloadAction<ILoginRequestPayload>) {
	const { payload } = action;

	try {
		yield put(showLoading());
		const response: IUserAuth = yield call(api.auth.login, payload);
		yield put(loginSuccess(response));
	} catch (error) {
		yield put(authFail());

		if (error.response) {
			Notify.error(error.response.data.message);
		}
	} finally {
		yield put(hideLoading());
	}
}

// =============================================================:
function* registrationRequestWorker(action: PayloadAction<any>) {
	const { payload } = action;

	try {
		yield put(showLoading());
		const response: IUserAuth = yield call(api.auth.registration, payload);
		yield put(loginSuccess(response));
	} catch (error) {
		yield put(authFail());

		if (error.response) {
			Notify.error(error.response.data.message);
		}
	} finally {
		yield put(hideLoading());
	}
}

// =============================================================:
function* logoutRequestWorker() {
	try {
		yield put(showLoading());
		yield call(api.auth.logout);
		yield put(logoutSuccess());
	} catch (error) {
		yield put(authFail());
		if (error.response) {
			Notify.error(error.response.data.message);
		}
	} finally {
		yield put(hideLoading());
	}
}

// =============================================================:

export function* authSaga() {
	yield takeEvery('@@auth/loginRequest', loginRequestWorker);
	yield takeEvery('@@auth/registrationRequest', registrationRequestWorker);
	yield takeEvery('@@auth/logoutRequest', logoutRequestWorker);
}
