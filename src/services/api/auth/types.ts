import { AxiosPromise } from 'axios';
import {
	ILoginRequestPayload,
	IRefreshTokenRequestPayload,
	IUserLogin,
} from 'redux/reducers/auth/types';
import { RefreshTokenGuard } from './guards/refreshToken';

export interface IAuthApi {
	login: (payload: ILoginRequestPayload) => Promise<IUserLogin>;
	refreshToken: (payload: IRefreshTokenRequestPayload) => Promise<RefreshTokenGuard>;
	registration: (payload: ILoginRequestPayload) => Promise<any>;
	logout: () => AxiosPromise;
}
