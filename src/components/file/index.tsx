import React, { FC } from 'react';
import { FileFilled, FolderFilled } from '@ant-design/icons';

// ==========================================:
const File: FC<any> = (props) => {
	const { dataFile } = props;

	return (
		<div className="file">
			<div className="file__icon">
				{dataFile.type === 'dir' ? (
					<FolderFilled style={{ fontSize: '35px' }} />
				) : (
					<FileFilled style={{ fontSize: '35px' }} />
				)}
			</div>
			<div className="file__name">{dataFile.name}</div>
			<div className="file__date">{dataFile.date}</div>
			<div className="file__size">{dataFile.size}</div>
		</div>
	);
};

export default File;
