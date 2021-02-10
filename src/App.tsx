import React, { FC } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { isAuth, isGuest } from 'routes/authMiddlewares';

import Home from 'pages/home';
import Auth from 'pages/auth';

// ==========================================:
const App: FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={isAuth(Home)} />
				<Route path="/auth" exact component={isGuest(Auth)} />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
