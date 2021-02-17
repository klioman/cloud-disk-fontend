import { connect } from 'react-redux';
import { logoutRequest } from 'redux/reducers/auth/reducer';
import { darkColorThemeToggle } from 'redux/reducers/app/reducer';
import { getDarkColorTheme } from 'redux/reducers/app/selectors';
import { IStoreState } from 'redux/types';
import { IAppHeaderMapDispatchToProps, IAppHeaderMapStateToProps } from './types';
import { View } from './view';

// ==========================================:
const mapStateToProps = (state: IStoreState): IAppHeaderMapStateToProps => {
	return {
		darkTheme: getDarkColorTheme(state),
	};
};
const mapDispatchToProps: IAppHeaderMapDispatchToProps = { logoutRequest, darkColorThemeToggle };
const AppHeader = connect(mapStateToProps, mapDispatchToProps)(View);

export { AppHeader };
