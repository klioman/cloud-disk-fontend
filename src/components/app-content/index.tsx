import React, { FC } from 'react';
import { Layout } from 'antd';

const AppContent: FC = ({ children }) => {
	const { Content } = Layout;

	return (
		<Content
			className="site-layout-background"
			style={{
				margin: '24px 16px',
				padding: 24,
				minHeight: 280,
			}}
		>
			{children}
		</Content>
	);
};

export default AppContent;
