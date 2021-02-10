import { IFileList } from 'redux/reducers/files/types';

// ==========================================:
export interface IFileListMapStateToProps {
	fileList?: IFileList;
}

export interface IFileListMapDispatchToProps {
	fileListRequest: () => void;
}

// ==========================================:
export type TConnectProps = IFileListMapStateToProps & IFileListMapDispatchToProps;

// ==========================================:
export type TFileListProps = TConnectProps;
