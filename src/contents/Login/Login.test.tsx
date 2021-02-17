import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';

import Login from 'contents/Login';

Object.defineProperty(window, 'matchMedia', {
	value: () => {
		return {
			matches: false,
			addListener: mockFunction,
			removeListener: mockFunction,
		};
	},
});

const mockFunction = jest.fn();

// ================================================:
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
	// -----------------------------------------------
	it('Sending a request to enter the admin panel', () => {
		const mockFn = jest.fn(() => true);

		const { getByTestId } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		const sendButton = getByTestId('send-login');

		fireEvent.click(sendButton);
		expect(mockFn()).toBe(true);
	});
	// -----------------------------------------------
	it('The form must be submitted by clicking on the button', () => {
		const mockFn = jest.fn(() => true);

		const { getByTestId } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		const loginForm = getByTestId('user-login');
		fireEvent.click(loginForm);

		expect(mockFn()).toBe(true);
	});
	// -----------------------------------------------
	it('When clicked, the user registration and login form should change', () => {
		const mockFn = jest.fn(() => true);

		const { getByTestId } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		const registrationForm = getByTestId('registration-form');

		fireEvent.click(registrationForm);
		expect(mockFn()).toBe(true);
	});
});
