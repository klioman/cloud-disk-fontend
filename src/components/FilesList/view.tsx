import React, { FC, useEffect } from 'react';
import { TFileListProps } from './types';

// ==========================================:
const View: FC<TFileListProps> = (props) => {
	const { fileListRequest } = props;

	useEffect(() => {
		fileListRequest();
	}, []);

	return (
		<>
			<div>
				<p>Render file list</p>
			</div>
		</>
	);
};

export { View };
