import { connect } from 'react-redux';
import { getDarkColorTheme } from 'redux/reducers/app/selectors';
import { IStoreState } from 'redux/types';
import { IEmptyLayoutMapStateToProps } from './types';
import { View } from './view';

// ==========================================:
const mapStateToProps = (state: IStoreState): IEmptyLayoutMapStateToProps => {
	return {
		darkTheme: getDarkColorTheme(state),
	};
};

const EmptyLayout = connect(mapStateToProps, null)(View);

export { EmptyLayout };
