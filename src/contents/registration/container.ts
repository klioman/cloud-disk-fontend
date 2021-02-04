import { connect } from 'react-redux';
import { registrationRequest } from 'redux/reducers/auth/reducer';
import { getAuthIsLoad } from 'redux/reducers/auth/selectors';
import { IStoreState } from 'redux/types';
import { IRegistrationIMapStateToProps, IRegistrationMapDispatchToProps } from './types';

import { View } from './view';

// ==========================================:
const mapStateToProps = (state: IStoreState): IRegistrationIMapStateToProps => {
	return { isLoading: getAuthIsLoad(state) };
};
const mapDispatchToProps: IRegistrationMapDispatchToProps = { registrationRequest };
const Registration = connect(mapStateToProps, mapDispatchToProps)(View);

export { Registration };
