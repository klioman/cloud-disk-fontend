import { AxiosInstance } from 'axios';
import { IStoreState } from 'redux/types';
import { IApi } from 'services/api/types';
import { Notify } from 'services/notify';

/*
|-----------------------------------------------------------------------------------------------------------------------
| https://dev.to/cogoo/how-to-set-a-new-property-on-the-window-object-in-typescript-3jeh
|-----------------------------------------------------------------------------------------------------------------------
*/

export declare global {
	interface Window {
		// Your custom global property
		__INITIAL_STATE__: IStoreState;
		$api: IApi;
		$http: AxiosInstance;
		$notify: Notify;
	}
}
