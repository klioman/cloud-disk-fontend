import React, { FC } from 'react';
import { Avatar, Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';

import AppSidebar from 'components/app-sidebar';
import AppContent from 'components/app-content';
import AppFooter from 'components/app-footer';

import { TBasicLayoutProps } from './types';

// ===============================================================
const View: FC<TBasicLayoutProps> = (props) => {
	const { children, sidebarCollapsedStatus, sidebarToggle } = props;
	const { Sider } = Layout;

	return (
		<Layout className="base-ant-layout">
			<AppSidebar>
				<Sider trigger={null} collapsible collapsed={sidebarCollapsedStatus}>
					<div className="logo" />
					<div className="user-profile">
						<Avatar size={64} icon={<UserOutlined />} />
					</div>
				</Sider>
			</AppSidebar>
			<Layout>
				<Layout className="site-layout">
					<Button
						onClick={sidebarToggle}
						icon={sidebarCollapsedStatus ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						style={{ marginTop: '10px', marginLeft: '15px' }}
					/>
					<AppContent>{children}</AppContent>
					<AppFooter />
				</Layout>
			</Layout>
		</Layout>
	);
};

export { View };
