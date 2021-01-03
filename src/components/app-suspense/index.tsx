import React, { FC } from 'react';
import { connect } from 'react-redux';
import { getAuthIsAuthenticated } from 'redux/reducers/auth/selectors';
import { IStoreState } from 'redux/types';
import BasicLayout from 'layouts/base';
import EmptyLayout from 'layouts/empty';
import SuspenseLoader from 'components/suspense-loader';

const View: FC<any> = (props) => {
	const { isUserAuth } = props;

	return (
		<>
			{isUserAuth ? (
				<BasicLayout>
					<SuspenseLoader />
				</BasicLayout>
			) : (
				<EmptyLayout>
					<SuspenseLoader />
				</EmptyLayout>
			)}
		</>
	);
};

// ================= Container: =================
const mapStateToProps = (store: IStoreState): any => {
	return { isUserAuth: getAuthIsAuthenticated(store) };
};
const mapDispatchToProps: any = {};
const AppSuspense = connect(mapStateToProps, mapDispatchToProps)(View);

export default AppSuspense;
