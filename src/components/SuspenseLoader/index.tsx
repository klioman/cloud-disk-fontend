import React, { FC } from 'react';
import { Spin } from 'antd';

// ==========================================:
const SuspenseLoader: FC = () => {
	return (
		<div className="suspense-loader">
			<Spin size="large" />
		</div>
	);
};

export default SuspenseLoader;
