import { ReactElement } from 'react';

// ==========================================
export interface IAppSidebarMapStateToProps {
	sidebarCollapsedStatus?: boolean;
	children?: ReactElement;
}
// ==========================================
export type TConnectProps = IAppSidebarMapStateToProps;

// ===========================================
export type TAppSidebarProps = TConnectProps;
