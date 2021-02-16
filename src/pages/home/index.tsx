import React, { FC, Suspense, lazy } from 'react';
import { FolderAddOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

import BasicLayout from 'layouts/base';
import SuspenseLoader from 'components/SuspenseLoader';
import AppBreadcrumbs from 'components/Breadcrumbs';

const HomeContent = lazy(() => import('contents/home'));

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
