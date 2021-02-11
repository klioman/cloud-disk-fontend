import { PayloadAction } from '@reduxjs/toolkit';

// ==========================================:
export interface IAppHeaderMapDispatchToProps {
	logoutRequest(): PayloadAction;
	darkColorThemeToggle: () => void;
}
export interface IAppHeaderMapStateToProps {
	darkTheme: boolean;
}

type TConnectProps = IAppHeaderMapStateToProps & IAppHeaderMapDispatchToProps;

// ==========================================:
interface IOwnProps {}

// ==========================================:
export type TAppHeaderComponentProps = IOwnProps & TConnectProps;
