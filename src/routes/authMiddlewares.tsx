import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { getAuthIsAuthenticated, getAuthIsNotAuthenticated } from 'redux/reducers/auth/selectors';

const locationHelper = locationHelperBuilder({});

export const isAuth = connectedRouterRedirect({
	redirectPath: '/auth',
	authenticatedSelector: getAuthIsAuthenticated,
	wrapperDisplayName: 'UserIsAuthenticated',
});

export const isGuest = connectedRouterRedirect({
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
	allowRedirectBack: false,
	authenticatedSelector: getAuthIsNotAuthenticated,
	wrapperDisplayName: 'UserIsNotAuthenticated',
});
