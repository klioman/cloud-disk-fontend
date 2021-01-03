import { ReactElement } from 'react';

// ==========================================
export interface IBasicLayoutMapStateToProps {
	sidebarCollapsedStatus?: boolean;
	children?: ReactElement;
}
export interface IBasicLayoutMapDispatchToProps {
	sidebarToggle: () => void;
}

// ==========================================
export type TConnectProps = IBasicLayoutMapStateToProps & IBasicLayoutMapDispatchToProps;

// ===========================================
export type TBasicLayoutProps = TConnectProps;
