import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
			addListener: mockFunction,
			removeListener: mockFunction,
		};
	},
});

// ================================================:
describe('Login content component:', () => {
	it('Login content component must be render', () => {
		const { container } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		expect(container).toBeInTheDocument();
	});

	// -----------------------------------------------
	it('Sending a request to enter the admin panel', () => {
		const mockFn = jest.fn(() => true);

		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		fireEvent.click(screen.getByTestId('send-login'));

		expect(mockFn()).toBe(true);
	});

	// -----------------------------------------------
	it('The form must be submitted by clicking on the button', () => {
		const mockFn = jest.fn(() => true);

		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		fireEvent.click(screen.getByTestId('user-login'));

		expect(mockFn()).toBe(true);
	});

	// -----------------------------------------------
	it('When clicked, the user registration and login form should change', () => {
		const mockFn = jest.fn(() => true);

		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Login animationStatus={mockFunction} position={false} changePosition={mockFunction} />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		fireEvent.click(screen.getByTestId('registration-form'));

		expect(mockFn()).toBe(true);
	});
});
