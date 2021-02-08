import React, { FC, useState } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NpProgress from 'components/np-progress';
import { isAuth, isGuest } from 'routes/authMiddlewares';

import Home from 'pages/home';
import Auth from 'pages/auth';

// ==========================================:
const App: FC = () => {
	const [isLoading, setIsLoading] = useState(false);

	const changeRouter = () => {
		setIsLoading(!isLoading);
	};

	return (
		<BrowserRouter>
			<Route
				render={({ location }) => (
					<>
						<NpProgress isAnimating={isLoading} />
						<TransitionGroup className="route-wrapper">
							<CSSTransition
								classNames="fade"
								key={location.pathname.split('/')[1]}
								onEnter={() => {
									changeRouter();
								}}
								onEntered={() => {
									changeRouter();
								}}
								timeout={0}
							>
								<Switch>
									<Route path="/" exact component={isAuth(Home)} />
									<Route path="/auth" exact component={isGuest(Auth)} />
									<Redirect to="/" />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					</>
				)}
			/>
		</BrowserRouter>
	);
};

export default App;
