import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import appReducer from './app/reducer';
import authReducer from './auth/reducer';
import fileReducer from './files/reducer';

const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		appReducer,
		authReducer,
		fileReducer,
	});

export default createRootReducer;
