import { PayloadAction } from '@reduxjs/toolkit';
import { ILoginRequestPayload } from 'redux/reducers/auth/types';

// ==========================================:
export interface ILoginMapDispatchToProps {
	loginRequest(payload: ILoginRequestPayload): PayloadAction<ILoginRequestPayload>;
}
export interface ILoginIMapStateToProps {
	isLoading: boolean;
}

type TConnectProps = ILoginIMapStateToProps & ILoginMapDispatchToProps;

// ==========================================:
interface IOwnProps {
	position: any;
	changePosition: any;
	animationStatus: any;
}
// ==========================================:

export type TLoginComponentProps = IOwnProps & TConnectProps;
