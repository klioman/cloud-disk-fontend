import React, { FC, useEffect } from 'react';
import { Table } from 'antd';
import { TFileListProps } from './types';

// ==========================================:
const View: FC<TFileListProps> = (props) => {
	const { fileListRequest, fileList } = props;

	useEffect(() => {
		fileListRequest();
	}, []);

	// =======================================
	const columns = [
		{
			title: 'Название',
			dataIndex: 'name',
			key: '_id',
		},
		{
			title: 'Дата',
			dataIndex: 'date',
			key: '_id',
			render: (data: Date) => new Date(data).toLocaleDateString('en-IN'),
		},
		{
			title: 'Размер',
			dataIndex: 'size',
			key: '_id',
		},
	];

	return <Table columns={columns} rowKey={(fileList) => fileList.name} dataSource={fileList} />;
};

export { View };
