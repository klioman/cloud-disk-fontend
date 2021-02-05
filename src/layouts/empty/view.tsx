import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';

import darkVars from 'assets/styles/theme/dark.json';
import lightVars from 'assets/styles/theme/light.json';

import { TEmptyLayoutProps } from './types';

// ==========================================:
const View: FC<TEmptyLayoutProps> = (props) => {
	const { classname = '', darkTheme, children } = props;

	const vars = darkTheme ? darkVars : lightVars;

	useEffect(() => {
		window.less.modifyVars(vars);
	}, [darkTheme]);

	return <Layout className={`${classname} empty-layout`}>{children}</Layout>;
};

export { View };
