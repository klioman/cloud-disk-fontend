import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { isAuth, isGuest } from 'routes/authMiddlewares';

import Home from 'pages/home';
import Auth from 'pages/auth';
import Page404 from 'pages/page404';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={isAuth(Home)} />
				<Route path="/auth" exact component={isGuest(Auth)} />
				<Route path="*" component={Page404} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
