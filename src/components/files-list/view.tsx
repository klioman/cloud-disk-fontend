import React, { FC, useEffect } from 'react';
import { Typography } from 'antd';
import { TFileListProps } from './types';

// ==========================================:
const View: FC<TFileListProps> = (props) => {
	const { fileListRequest } = props;
	const { Title } = Typography;

	useEffect(() => {
		fileListRequest();
	}, []);

	return (
		<>
			<Title level={2}>Files list</Title>
		</>
	);
};

export { View };
