import React, { FC, useEffect } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { Card, Layout } from 'antd';
import LoadingBar from 'react-redux-loading-bar';
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
		<>
			<LoadingBar className="loading-bar" />
			<Layout className="base-ant-layout">
				<Header />
				<Content className="base-ant-layout-content">
					<Scrollbar
						thumbXProps={{
							renderer: (props) => {
								const { elementRef, ...restProps } = props;
								// eslint-disable-next-line react/jsx-props-no-spreading
								return <span {...restProps} ref={elementRef} className="ThUmBX" />;
							},
						}}
					>
						<Card className="base-ant-layout-card">{children}</Card>
					</Scrollbar>
				</Content>
				<Footer />
			</Layout>
		</>
	);
};

export { View };
