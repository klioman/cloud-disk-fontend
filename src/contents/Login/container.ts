import { connect } from 'react-redux';
import { loginRequest } from 'redux/reducers/auth/reducer';
import { getAuthIsLoad } from 'redux/reducers/auth/selectors';
import { IStoreState } from 'redux/types';
import { ILoginIMapStateToProps, ILoginMapDispatchToProps } from './types';

import { View } from './view';

// ==========================================:
const mapStateToProps = (state: IStoreState): ILoginIMapStateToProps => {
	return { isLoading: getAuthIsLoad(state) };
};
const mapDispatchToProps: ILoginMapDispatchToProps = { loginRequest };
const Login = connect(mapStateToProps, mapDispatchToProps)(View);

export { Login };
