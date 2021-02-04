import { connect } from 'react-redux';
import { getAuthIsAuthenticated } from 'redux/reducers/auth/selectors';
import { IStoreState } from 'redux/types';
import { ISuspenseMapStateToProps } from './types';
import { View } from './view';

// ==========================================:
const mapStateToProps = (state: IStoreState): ISuspenseMapStateToProps => {
	return { isUserAuth: getAuthIsAuthenticated(state) };
};

const Suspense = connect(mapStateToProps, null)(View);

export { Suspense };
