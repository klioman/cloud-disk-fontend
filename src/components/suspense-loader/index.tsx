import React, { FC } from 'react';
import { Progress, Spin } from 'antd';

// ==========================================:
const SuspenseLoader: FC = () => {
	return (
		<>
			<Progress
				strokeColor={{
					from: '#108ee9',
					to: '#87d068',
				}}
				percent={100}
				showInfo={false}
				strokeWidth={4}
				status="active"
				style={{ position: 'absolute', top: 0, left: 0, right: 0, fontSize: 0 }}
			/>
			<div className="body-suspense-spiner">
				<Spin size="large" />
			</div>
		</>
	);
};

export default SuspenseLoader;
