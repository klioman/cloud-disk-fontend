import React, { FC } from 'react';
import { Typography } from 'antd';

// ==========================================:
const FilesList: FC = () => {
	const { Title } = Typography;

	return (
		<>
			<Title level={2}>Files list</Title>
		</>
	);
};

export default FilesList;
