import { connect } from 'react-redux';
import { getSidebarCollapsed } from 'redux/reducers/app/selectors';
import { IStoreState } from 'redux/types';
import { IAppSidebarMapStateToProps } from './types';

import { View } from './view';

// ================================================
const mapStateToProps = (state: IStoreState): IAppSidebarMapStateToProps => {
	return {
		sidebarCollapsedStatus: getSidebarCollapsed(state),
	};
};
const AppSidebar = connect(mapStateToProps, null)(View);

export { AppSidebar };
