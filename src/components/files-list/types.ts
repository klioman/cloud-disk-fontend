import { IFileList } from 'redux/reducers/files/types';

// ==========================================:
export interface IFileListMapStateToProps {
	fileList: IFileList | never[];
}

export interface IFileListMapDispatchToProps {
	fileListRequest: () => void;
}

// ==========================================:
export type TConnectProps = IFileListMapStateToProps & IFileListMapDispatchToProps;

// ==========================================:
export type TFileListProps = TConnectProps;
