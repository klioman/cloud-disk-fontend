import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';
import App from './App';

import 'assets/styles/index.less';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;

const render = (Component: ComponentType, root: HTMLElement, done?: () => void) => {
	ReactDOM.render(
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConnectedRouterProvider history={history}>
					<Component />
				</ConnectedRouterProvider>
			</PersistGate>
		</ReduxProvider>,
		root,
		done,
	);
};

render(App, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
