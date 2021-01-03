import React, { FC } from 'react';
import { Layout } from 'antd';
import { TAppSidebarProps } from './types';

const View: FC<TAppSidebarProps> = (props) => {
	const { children, sidebarCollapsedStatus } = props;
	const { Sider } = Layout;

	return (
		<Sider trigger={null} collapsible collapsed={sidebarCollapsedStatus}>
			{children}
		</Sider>
	);
};

export { View };
