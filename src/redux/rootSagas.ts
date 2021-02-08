import { spawn } from 'redux-saga/effects';
import { authSaga } from './reducers/auth/saga';
import { fileSaga } from './reducers/files/saga';

export default function* rootSagas() {
	yield spawn(authSaga);
	yield spawn(fileSaga);
}
