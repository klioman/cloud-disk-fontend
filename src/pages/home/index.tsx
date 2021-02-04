import React, { FC, Suspense, lazy } from 'react';
import BasicLayout from 'layouts/base';

const HomeContent = lazy(() => import('contents/home'));

// ==========================================:
const Home: FC = () => {
	return (
		<BasicLayout>
			<Suspense fallback={<div>Загрузка...</div>}>
				<HomeContent />
			</Suspense>
		</BasicLayout>
	);
};

export default Home;
