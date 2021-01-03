import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import AppHeader from 'components/app-header';
import AppSidebar from 'components/app-sidebar';
import AppContent from 'components/app-content';
import AppFooter from 'components/app-footer';
import SidebarMenu from 'components/sidebar-menu';

import { TBasicLayoutProps } from './types';

// ===============================================================
const View: FC<TBasicLayoutProps> = (props) => {
	const { children, sidebarCollapsedStatus, sidebarToggle } = props;
	const { Sider } = Layout;

	return (
		<Layout className="base-ant-layout">
			<AppHeader />
			<Layout>
				<AppSidebar>
					<Sider trigger={null} collapsible collapsed={sidebarCollapsedStatus}>
						<SidebarMenu />
					</Sider>
				</AppSidebar>
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
