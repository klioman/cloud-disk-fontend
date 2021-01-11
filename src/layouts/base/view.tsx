import React, { FC } from 'react';
import { Layout } from 'antd';
import AppHeader from 'components/app-header';
import { TBasicLayoutProps } from './types';

// ===============================================================
const View: FC<TBasicLayoutProps> = () => {
	return (
		<Layout className="base-ant-layout">
			<AppHeader />
		</Layout>
	);
};

export { View };
