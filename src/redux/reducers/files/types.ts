export interface IFileStore {
	fileList: IFileList | never[];
	isfileListLoader: boolean;
}

export interface IFileList {
	__v: number;
	_id: string;
	childs: Array<any>;
	date: string;
	name: string;
	path: string;
	size: number;
	type: string;
	user: string;
}
