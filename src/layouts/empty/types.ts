import { ReactNode } from 'react';

// ==========================================:
export interface IEmptyLayoutMapStateToProps {
	darkTheme?: boolean;
}

// ==========================================:
interface IOwnProps {
	children: ReactNode;
	classname?: string | undefined;
}

// ==========================================:
export type TConnectProps = IEmptyLayoutMapStateToProps;

// ==========================================:
export type TEmptyLayoutProps = IOwnProps & TConnectProps;
