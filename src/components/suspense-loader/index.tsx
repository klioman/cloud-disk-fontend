import React, { FC } from 'react';
import { Spin } from 'antd';

// ==========================================:
const SuspenseLoader: FC = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Spin size="large" />
		</div>
	);
};

export default SuspenseLoader;
