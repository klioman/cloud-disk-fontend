import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';

import Login from 'contents/Login';

const mockFunction = jest.fn();

Object.defineProperty(window, 'matchMedia', {
	value: () => {
		return {
			matches: false,
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			addListener: () => {},
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			removeListener: () => {},
		};
	},
});

describe('Login content component:', () => {
	it('Login content component must be render', () => {
		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		expect(
			<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />,
		).toBeTruthy();
	});
});
