import React, { FC } from 'react';
import { Layout } from 'antd';

const AppFooter: FC = () => {
	const { Footer } = Layout;

	return <Footer style={{ textAlign: 'center' }}>App footer</Footer>;
};

export default AppFooter;
