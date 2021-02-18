import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';

import Header from 'components/Header';

// ================================================:
describe('Header component:', () => {
	it('Header component must be render', () => {
		const { container } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Header />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		expect(container).toBeInTheDocument();
	});

	// -----------------------------------------------
	it('User logout from admin panel', () => {
		const mockFn = jest.fn(() => true);

		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Header />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		fireEvent.click(screen.getByRole('button'));

		expect(mockFn()).toBe(true);
	});
	// -----------------------------------------------
	it('The color theme should change', () => {
		const mockFn = jest.fn(() => true);

		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Header />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		fireEvent.click(screen.getByRole('switch'));

		expect(mockFn()).toBe(true);
	});
});
