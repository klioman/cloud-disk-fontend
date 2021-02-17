import { PayloadAction } from '@reduxjs/toolkit';
import { IRegistrationRequestPayload } from 'redux/reducers/auth/types';

// ==========================================:

export interface IRegistrationIMapStateToProps {
	isLoading: boolean;
}

export interface IRegistrationMapDispatchToProps {
	registrationRequest(
		payload: IRegistrationRequestPayload,
	): PayloadAction<IRegistrationRequestPayload>;
}

type TConnectProps = IRegistrationIMapStateToProps & IRegistrationMapDispatchToProps;

// ==========================================:
interface IOwnProps {
	position: boolean;
	changePosition: (position: boolean) => void;
	animationStatus: (item: boolean) => void;
}
// ==========================================:

export type TRegistrationComponentProps = IOwnProps & TConnectProps;
