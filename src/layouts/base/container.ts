import { connect } from 'react-redux';
import { getSidebarCollapsed } from 'redux/reducers/app/selectors';
import { IStoreState } from 'redux/types';
import { sidebarToggle } from 'redux/reducers/app/reducer';
import { View } from './view';

import { IBasicLayoutMapDispatchToProps, IBasicLayoutMapStateToProps } from './types';

// ================================================
const mapStateToProps = (state: IStoreState): IBasicLayoutMapStateToProps => {
	return {
		sidebarCollapsedStatus: getSidebarCollapsed(state),
	};
};
const mapDispatchToProps: IBasicLayoutMapDispatchToProps = {
	sidebarToggle,
};
const BasicLayout = connect(mapStateToProps, mapDispatchToProps)(View);

export { BasicLayout };
