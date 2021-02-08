import React, { FC, Suspense, lazy, useEffect } from 'react';
import BasicLayout from 'layouts/base';
import SuspenseLoader from 'components/suspense-loader';
import { TFileListProps } from './types';

const HomeContent = lazy(() => import('contents/home'));

// ==========================================:
const View: FC<TFileListProps> = (props) => {
	const { fileListRequest } = props;

	useEffect(() => {
		fileListRequest();
	}, []);

	return (
		<BasicLayout>
			<Suspense fallback={<SuspenseLoader />}>
				<HomeContent />
			</Suspense>
		</BasicLayout>
	);
};

export { View };
