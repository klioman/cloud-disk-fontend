import { PayloadAction } from '@reduxjs/toolkit';

// ============================
export interface IAppHeaderMapDispatchToProps {
	logoutRequest(): PayloadAction;
}
export interface IAppHeaderMapStateToProps {}

type TConnectProps = IAppHeaderMapStateToProps & IAppHeaderMapDispatchToProps;

// =============================
interface IOwnProps {}
// =============================

export type TAppHeaderComponentProps = IOwnProps & TConnectProps;
