import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import File from 'components/file';

import { TFileListProps } from './types';

// ==========================================:
const View: FC<TFileListProps> = (props) => {
	const { fileListRequest, createDirRequest, fileList } = props;

	useEffect(() => {
		fileListRequest();
	}, []);

	const handleCreateDir = () => {
		const payload: any = {
			name: 'fidrff11111111st',
			type: 'dir',
		};

		createDirRequest(payload);
	};

	return (
		<>
			<div className="file-list">
				<div className="file-list__header">
					<div className="file-list__type">Тип</div>
					<div className="file-list__name">Название</div>
					<div className="file-list__date">Дата</div>
					<div className="file-list__size">Размер</div>
				</div>
				{fileList.map((fileItem: any) => (
					<File key={fileItem.id} dataFile={fileItem} />
				))}
			</div>

			<Button type="primary" onClick={handleCreateDir}>
				Создать папку
			</Button>
		</>
	);
};

export { View };
