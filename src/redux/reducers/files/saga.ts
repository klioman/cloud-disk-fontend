import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { api, Notify } from 'services';
import { fileListSuccess } from './reducer';

// =============================================================:
function* loginRequestWorker(action: PayloadAction<any>) {
	const { payload } = action;

	try {
		yield put(showLoading());
		const response: any = yield call(api.files.filesList, payload);

		// eslint-disable-next-line no-console
		console.log('file list: ', response);

		yield put(fileListSuccess(response));
	} catch (error) {
		if (error.response) {
			Notify.error(error.response.data.message);
		}
	} finally {
		yield put(hideLoading());
	}
}

// =============================================================:
export function* fileSaga() {
	yield takeEvery('@@file/fileListRequest', loginRequestWorker);
}
