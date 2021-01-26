// ============================
export interface IRegistrationMapDispatchToProps {
	registrationRequest: any;
}
export interface IRegistrationIMapStateToProps {
	isLoading: boolean;
}

type TConnectProps = IRegistrationIMapStateToProps & IRegistrationMapDispatchToProps;

// =============================
interface IOwnProps {
	position: any;
	changePosition: any;
	animationStatus: any;
}
// =============================

export type TRegistrationComponentProps = IOwnProps & TConnectProps;
