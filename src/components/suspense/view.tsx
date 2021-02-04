import React, { FC } from 'react';
import BasicLayout from 'layouts/base';
import EmptyLayout from 'layouts/empty';
import SuspenseLoader from 'components/suspense-loader';
import { TSuspenseProps } from './types';

// ==========================================:
const View: FC<TSuspenseProps> = (props) => {
	const { isUserAuth } = props;

	return (
		<>
			{isUserAuth ? (
				<BasicLayout>
					<SuspenseLoader />
				</BasicLayout>
			) : (
				<EmptyLayout>
					<SuspenseLoader />
				</EmptyLayout>
			)}
		</>
	);
};

export { View };
