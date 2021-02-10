import { call, put, takeEvery } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { api, Notify } from 'services';
import { fileListSuccess } from './reducer';
import { IFileList } from './types';

// =============================================================:
function* fileListRequestWorker() {
	try {
		yield put(showLoading());
		const response: IFileList = yield call(api.files.filesList);

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
	yield takeEvery('@@file/fileListRequest', fileListRequestWorker);
}
