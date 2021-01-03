import { AxiosResponse } from 'axios';
import { IUserLogin } from 'redux/reducers/auth/types';
import { BaseGuard } from 'services/api/baseGuard';

interface IData {
	data: IUserLogin;
}

export class LoginGuard extends BaseGuard implements IData {
	public readonly data: IUserLogin = {} as IUserLogin;

	protected readonly guardRules = {
		permissions: {
			userRole: ['string'],
			userPermissions: 'array',
		},
		tokens: {
			accessToken: ['required', 'string'],
			refreshToken: ['required', 'string'],
		},
	};

	constructor(response: AxiosResponse<{ data: IUserLogin }>) {
		super();
		this.data = this.validate(response.data);
	}
}
