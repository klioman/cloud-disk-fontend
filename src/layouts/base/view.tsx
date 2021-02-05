import React, { FC, useEffect } from 'react';
import { Card, Layout } from 'antd';
import Header from 'components/header';
import Footer from 'components/footer';

import darkVars from 'assets/styles/theme/dark.json';
import lightVars from 'assets/styles/theme/light.json';

import { TBasicLayoutProps } from './types';

// ==========================================:
const View: FC<TBasicLayoutProps> = (props) => {
	const { darkTheme, children } = props;
	const { Content } = Layout;

	const vars = darkTheme ? darkVars : lightVars;

	useEffect(() => {
		window.less.modifyVars(vars);
	}, [darkTheme]);

	return (
		<Layout className="base-ant-layout">
			<Header />
			<Content className="base-ant-layout-content">
				<Card className="base-ant-layout-card">{children}</Card>
			</Content>
			<Footer />
		</Layout>
	);
};

export { View };
