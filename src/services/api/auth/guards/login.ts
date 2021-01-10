import { AxiosResponse } from 'axios';
import { IUserAuth } from 'redux/reducers/auth/types';
import { BaseGuard } from 'services/api/baseGuard';

interface IData {
	data: IUserAuth;
}

export class LoginGuard extends BaseGuard implements IData {
	public readonly data: IUserAuth = {} as IUserAuth;

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

	constructor(response: AxiosResponse<{ data: IUserAuth }>) {
		super();
		this.data = this.validate(response.data);
	}
}
