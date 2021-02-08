import { call, put, takeEvery } from 'redux-saga/effects';
import { api, Notify } from 'services';
import { PayloadAction } from '@reduxjs/toolkit';
import { fileListSuccess } from './reducer';

// =============================================================:
function* loginRequestWorker(action: PayloadAction<any>) {
	const { payload } = action;

	try {
		const response: any = yield call(api.files.filesList, payload);

		// eslint-disable-next-line no-console
		console.log('file list: ', response);

		yield put(fileListSuccess(response));
	} catch (error) {
		if (error.response) {
			Notify.error(error.response.data.message);
		}
	}
}

// =============================================================:
export function* fileSaga() {
	yield takeEvery('@@file/fileListRequest', loginRequestWorker);
}
