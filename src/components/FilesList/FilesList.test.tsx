import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';
import { history } from 'routes/history';
import { persistor, store } from 'redux/store';

import FilesList from 'components/FilesList';

// ================================================:
describe('Files list component:', () => {
	it('Files list component must be render', () => {
		const { container } = render(
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouterProvider history={history}>
						<FilesList />
					</ConnectedRouterProvider>
				</PersistGate>
			</ReduxProvider>,
		);

		expect(container).toBeInTheDocument();
	});
});
