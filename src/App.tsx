import React, { FC } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { isAuth, isGuest } from 'routes/authMiddlewares';
import LoadingBar from 'react-redux-loading-bar';

import Home from 'pages/home';
import Auth from 'pages/auth';

// ==========================================:
const App: FC = () => {
	return (
		<>
			<LoadingBar style={{ backgroundColor: '#00b67b', height: '3px' }} />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={isAuth(Home)} />
					<Route path="/auth" exact component={isGuest(Auth)} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
