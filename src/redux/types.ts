import { RouterState as IRouterState } from 'connected-react-router';
import { IAppStore } from './reducers/app/types';
import { IAuthStore } from './reducers/auth/types';

export interface IStoreState {
	router: IRouterState;
	appReducer: IAppStore;
	authReducer: IAuthStore;
	fileReducer: any;
}
