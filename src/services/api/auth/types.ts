import { AxiosPromise } from 'axios';
import { ILoginRequestPayload, IRefreshTokenRequestPayload } from 'redux/reducers/auth/types';
import { LoginGuard } from './guards';
import { RefreshTokenGuard } from './guards/refreshToken';

export interface IAuthApi {
	login: (payload: ILoginRequestPayload) => Promise<LoginGuard>;
	refreshToken: (payload: IRefreshTokenRequestPayload) => Promise<RefreshTokenGuard>;
	registration: (payload: ILoginRequestPayload) => Promise<any>;
	logout: () => AxiosPromise;
}
