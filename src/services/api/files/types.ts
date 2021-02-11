import { IFileList } from 'redux/reducers/files/types';

// ==========================================:
export interface IFilesApi {
	filesList: () => Promise<IFileList>;
	createFolder: (payload: any) => Promise<any>;
}
