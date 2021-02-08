// ==========================================:
export interface IFileListMapStateToProps {
	fileList?: any;
}

export interface IFileListMapDispatchToProps {
	fileListRequest: () => void;
}

// ==========================================:
export type TConnectProps = IFileListMapStateToProps & IFileListMapDispatchToProps;

// ==========================================:
export type TFileListProps = TConnectProps;
