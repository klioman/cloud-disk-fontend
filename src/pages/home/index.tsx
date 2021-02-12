import React, { FC, Suspense, lazy } from 'react';
import BasicLayout from 'layouts/base';
import SuspenseLoader from 'components/suspense-loader';
import AppBreadcrumbs from 'components/breadcrumbs';

const HomeContent = lazy(() => import('contents/home'));

// ==========================================:
const Home: FC = () => {
	return (
		<BasicLayout>
			<AppBreadcrumbs />
			<Suspense fallback={<SuspenseLoader />}>
				<HomeContent />
			</Suspense>
		</BasicLayout>
	);
};

export default Home;
