import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

// ==========================================:
const AppBreadcrumbs: FC = () => {
	return (
		<div className="breadcrumb-wrapper">
			<Breadcrumb>
				<Breadcrumb.Item href="http://">
					<HomeOutlined />
				</Breadcrumb.Item>
				<Breadcrumb.Item href="http://">
					<UserOutlined />
					<span>Application List</span>
				</Breadcrumb.Item>
				<Breadcrumb.Item>Application</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
};

export default AppBreadcrumbs;
