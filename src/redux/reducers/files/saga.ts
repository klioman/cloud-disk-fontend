import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { api, Notify } from 'services';
import { fileListRequest, fileListSuccess } from './reducer';
import { IFileList } from './types';

// =============================================================:
function* fileListRequestWorker() {
	try {
		yield put(showLoading());
		const response: IFileList = yield call(api.files.filesList);
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
function* createDirRequestWorker(action: PayloadAction<any>) {
	try {
		const { payload } = action;

		yield call(api.files.createFolder, payload);
		yield put(fileListRequest());
		yield put(showLoading());
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
	yield takeEvery('@@file/fileListRequest', fileListRequestWorker);
	yield takeEvery('@@file/createDirRequest', createDirRequestWorker);
}
