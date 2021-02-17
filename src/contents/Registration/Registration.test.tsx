import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';

import Registration from 'contents/Registration';

const mockFunction = jest.fn();

Object.defineProperty(window, 'matchMedia', {
	value: () => {
		return {
			matches: false,
			addListener: mockFunction,
			removeListener: mockFunction,
		};
	},
});

// ================================================:
describe('Registration content component:', () => {
	it('Registration content component must be render', () => {
		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Registration
							animationStatus={mockFunction}
							position={false}
							changePosition={mockFunction}
						/>
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		expect(
			<Registration
				animationStatus={mockFunction}
				position={false}
				changePosition={mockFunction}
			/>,
		).toBeTruthy();
	});
	// -----------------------------------------------
	it('Sending a request user registration', () => {
		const mockFn = jest.fn(() => true);

		const { getByTestId } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Registration
							animationStatus={mockFunction}
							position={false}
							changePosition={mockFunction}
						/>
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		const sendButton = getByTestId('send-registration');

		fireEvent.click(sendButton);
		expect(mockFn()).toBe(true);
	});
	// -----------------------------------------------
	it('When clicked, the user login  and registration form should change', () => {
		const mockFn = jest.fn(() => true);

		const { getByTestId } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Registration
							animationStatus={mockFunction}
							position={false}
							changePosition={mockFunction}
						/>
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		const loginForm = getByTestId('login-form');

		fireEvent.click(loginForm);
		expect(mockFn()).toBe(true);
	});
});
