import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from 'components/header';

import darkVars from 'assets/styles/theme/dark.json';
import lightVars from 'assets/styles/theme/light.json';

import { TBasicLayoutProps } from './types';

// ==========================================:
const View: FC<TBasicLayoutProps> = (props) => {
	const { darkTheme } = props;

	const vars = darkTheme ? darkVars : lightVars;
	window.less.modifyVars(vars);

	return (
		<Layout className="base-ant-layout">
			<Header />
		</Layout>
	);
};

export { View };
