// ==========================================:
export interface IFileListMapStateToProps {
	fileList: any;
}

export interface IFileListMapDispatchToProps {
	fileListRequest: () => void;
	createDirRequest: (payload: any) => any;
}

// ==========================================:
export type TConnectProps = IFileListMapStateToProps & IFileListMapDispatchToProps;

// ==========================================:
export type TFileListProps = TConnectProps;
