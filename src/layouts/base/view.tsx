import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from 'components/header';
import { TBasicLayoutProps } from './types';

// ===============================================================
const View: FC<TBasicLayoutProps> = () => {
	return (
		<Layout className="base-ant-layout">
			<Header />
		</Layout>
	);
};

export { View };
