export interface IToken {
	accessToken: string;
	refreshToken: string;
}

export interface IUser {
	diskSpace: number;
	email: string;
	id: string;
	usedSpace: number;
	userRole: string;
}
export interface IUserPermissions {
	userRole: string;
	userPermissions: any | [];
}

export interface ILoginRequestPayload {
	email: string;
	password: string;
}

export interface IRegistrationRequestPayload {
	email: string;
	password: string;
}

export interface IUserAuth {
	permissions: IUserPermissions;
	tokens: IToken;
	user: IUser;
}

export interface IAuthStore {
	userPermissions: any | null;
	isAuthLoader: boolean;
	isLogoutLoader: boolean;
	isAuthenticated: boolean;
	token: IToken | null;
}

export interface ILoginSuccessPayload extends IUserAuth {}
export interface IRegistrationSuccessPayload extends IUserAuth {}

export interface IRefreshTokenRequestPayload extends Pick<IToken, 'refreshToken'> {}
