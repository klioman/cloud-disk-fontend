import { AxiosPromise } from 'axios';
import {
	ILoginRequestPayload,
	IRefreshTokenRequestPayload,
	IToken,
	IUserAuth,
} from 'redux/reducers/auth/types';

export interface IAuthApi {
	login: (payload: ILoginRequestPayload) => Promise<IUserAuth>;
	refreshToken: (payload: IRefreshTokenRequestPayload) => Promise<IToken>;
	registration: (payload: ILoginRequestPayload) => Promise<IUserAuth>;
	logout: () => AxiosPromise;
}
