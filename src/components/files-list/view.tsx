import React, { FC, useEffect } from 'react';
import File from 'components/file';

import { TFileListProps } from './types';

// ==========================================:
const View: FC<TFileListProps> = (props) => {
	const { fileListRequest, fileList } = props;

	useEffect(() => {
		fileListRequest();
	}, []);

	return (
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
	);
};

export { View };
