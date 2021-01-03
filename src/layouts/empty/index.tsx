import { Layout } from 'antd';
import React, { FC } from 'react';

const EmptyLayout: FC = ({ children }) => {
	return <Layout className="empty-ant-layout">{children}</Layout>;
};

export default EmptyLayout;
