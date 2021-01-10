import { Layout } from 'antd';
import React, { FC } from 'react';
import { IEmptyLayout } from './types';

// =====================================:
const EmptyLayout: FC<IEmptyLayout> = (props) => {
	const { classname = '', children } = props;

	return <Layout className={`${classname} empty-layout`}>{children}</Layout>;
};

export default EmptyLayout;
