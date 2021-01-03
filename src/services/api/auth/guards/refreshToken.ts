import { AxiosResponse } from 'axios';
import { IToken } from 'redux/reducers/auth/types';
import { BaseGuard } from 'services/api/baseGuard';

interface IData {
	data: IToken;
}

export class RefreshTokenGuard extends BaseGuard implements IData {
	public readonly data: IToken = {} as IToken;

	protected readonly guardRules = {
		accessToken: ['required', 'string'],
		refreshToken: ['required', 'string'],
	};

	constructor(response: AxiosResponse<{ data: IToken }>) {
		super();
		this.data = this.validate(response.data);
	}
}
