import { PlainObject } from 'definitions/common-types';
import { IAuthApi } from './auth/types';

export interface IApi extends PlainObject {
	auth: IAuthApi;
}
