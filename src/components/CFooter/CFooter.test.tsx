import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';

import Footer from 'components/CFooter';

describe('Footer component:', () => {
	it('Footer component must be render', () => {
		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Footer />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		expect(<Footer />).toBeTruthy();
	});
});
