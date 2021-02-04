import React, { FC } from 'react';
import { Typography } from 'antd';

// ==========================================:
const HomeContent: FC = () => {
	const { Title } = Typography;

	return (
		<>
			<Title level={2}>Home page</Title>
			<Title level={4}>Home subtitle</Title>
		</>
	);
};

export default HomeContent;
