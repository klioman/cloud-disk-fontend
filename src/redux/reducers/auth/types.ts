export interface IToken {
	accessToken: string;
	refreshToken: string;
}

export interface IUserPermissions {
	userRole: string;
	userPermissions: any | [];
}

export interface ILoginRequestPayload {
	email: string;
	password: string;
}

export interface IUserLogin {
	permissions: IUserPermissions;
	tokens: IToken;
}

export interface IAuthStore {
	userPermissions: any | null;
	isAuthLoader: boolean;
	isLogoutLoader: boolean;
	isAuthenticated: boolean;
	token: IToken | null;
}

export interface ILoginSuccessPayload extends IUserLogin {}
export interface IRefreshTokenRequestPayload extends Pick<IToken, 'refreshToken'> {}
