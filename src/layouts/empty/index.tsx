import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { getDarkColorTheme } from 'redux/reducers/app/selectors';

import darkVars from 'assets/styles/theme/dark.json';
import lightVars from 'assets/styles/theme/light.json';

import { IStoreState } from 'redux/types';
import { IEmptyLayout } from './types';

// =====================================:
const View: FC<IEmptyLayout> = (props) => {
	const { classname = '', darkTheme, children } = props;

	const vars = darkTheme ? darkVars : lightVars;
	window.less.modifyVars(vars);

	return <Layout className={`${classname} empty-layout`}>{children}</Layout>;
};

// =====================================:
const mapStateToProps = (state: IStoreState): any => {
	return {
		darkTheme: getDarkColorTheme(state),
	};
};

const EmptyLayout = connect(mapStateToProps, null)(View);

export default EmptyLayout;
