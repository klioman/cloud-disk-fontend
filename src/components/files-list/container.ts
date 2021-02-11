import { connect } from 'react-redux';
import { getFilesList } from 'redux/reducers/files/selectors';
import { IStoreState } from 'redux/types';
import { fileListRequest, createDirRequest } from 'redux/reducers/files/reducer';
import { IFileListMapDispatchToProps, IFileListMapStateToProps } from './types';

import { View } from './view';

// ==========================================:
const mapStateToProps = (state: IStoreState): IFileListMapStateToProps => {
	return {
		fileList: getFilesList(state),
	};
};

const mapDispatchToProps: IFileListMapDispatchToProps = {
	fileListRequest,
	createDirRequest,
};

const FilesList = connect(mapStateToProps, mapDispatchToProps)(View);

export { FilesList };
