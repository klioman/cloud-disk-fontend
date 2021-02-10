import { IFileList } from 'redux/reducers/files/types';
import { http } from 'services/http';
import { endpoint } from '../endpoints';
import { IFilesApi } from './types';

// ==========================================:
export const files: IFilesApi = {
	filesList: () => {
		return http.get(endpoint.files.FILES).then((response): IFileList => response.data);
	},
};
