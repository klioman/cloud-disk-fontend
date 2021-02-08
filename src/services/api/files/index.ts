import { http } from 'services/http';
import { endpoint } from '../endpoints';
import { IFilesApi } from './types';

export const files: IFilesApi = {
	filesList: () => {
		return http.get<any>(endpoint.files.FILES).then((response): any => response.data);
	},
};
