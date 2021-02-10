import { PlainObject } from 'definitions/common-types';
import { IAuthApi } from './auth/types';
import { IFilesApi } from './files/types';

// ==========================================:
export interface IApi extends PlainObject {
	auth: IAuthApi;
	files: IFilesApi;
}
