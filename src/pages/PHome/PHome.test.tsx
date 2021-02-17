import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';

import Home from 'pages/PHome';

describe('Home page component:', () => {
	it('Home page component must be render', () => {
		render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<Home />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		expect(<Home />).toBeTruthy();
	});
});
