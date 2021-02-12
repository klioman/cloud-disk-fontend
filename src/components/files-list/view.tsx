import React, { FC, useEffect } from 'react';
import { Table, Button, Tooltip } from 'antd';
import { DeleteFilled, FileFilled, FolderFilled } from '@ant-design/icons';
import { TFileListProps } from './types';

// ==========================================:
const View: FC<TFileListProps> = (props) => {
	const { fileListRequest, fileList } = props;

	useEffect(() => {
		fileListRequest();
	}, []);

	const columns = [
		{
			title: 'Тип',
			dataIndex: 'type',
			key: 'type',
			render: (typeElement: string) => {
				if (typeElement === 'dir') {
					return <FolderFilled style={{ fontSize: '35px' }} />;
				}

				return <FileFilled />;
			},
		},
		{
			title: 'Название',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Дата',
			dataIndex: 'date',
			key: 'date',
			render: (data: string) => new Date(data).toLocaleDateString('de-DE'),
		},
		{
			title: 'Размер',
			dataIndex: 'size',
			key: 'size',
		},
		{
			title: 'Действия',
			dataIndex: 'action',
			key: 'action',
			render: () => (
				<div style={{ textAlign: 'center' }}>
					<Tooltip title="Удалить">
						<Button type="primary" danger icon={<DeleteFilled />} />
					</Tooltip>
				</div>
			),
		},
	];

	return (
		<Table
			pagination={false}
			rowKey={(record) => record.name}
			columns={columns}
			dataSource={fileList}
		/>
	);
};

export { View };
