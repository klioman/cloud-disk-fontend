import { spawn } from 'redux-saga/effects';
import { authSaga } from './reducers/auth/saga';

export default function* rootSagas() {
	yield spawn(authSaga);
}
