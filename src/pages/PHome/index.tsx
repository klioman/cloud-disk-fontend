import React, { FC, Suspense, lazy } from 'react';
import { FolderAddOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

import BasicLayout from 'layouts/LBase';
import SuspenseLoader from 'components/CSuspenseLoader';
import AppBreadcrumbs from 'components/CBreadcrumbs';

const HomeContent = lazy(() => import('contents/CHome'));

// ==========================================:
const Home: FC = () => {
	return (
		<BasicLayout>
			<div className="file-list-header">
				<AppBreadcrumbs />
				<Tooltip title="Добавить папку">
					<Button type="primary" icon={<FolderAddOutlined />} />
				</Tooltip>
			</div>
			<Suspense fallback={<SuspenseLoader />}>
				<HomeContent />
			</Suspense>
		</BasicLayout>
	);
};

export default Home;
