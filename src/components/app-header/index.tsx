import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import { connect } from 'react-redux';
import { IStoreState } from 'redux/types';
import { logoutRequest } from 'redux/reducers/auth/reducer';
import {
	IAppHeaderMapDispatchToProps,
	IAppHeaderMapStateToProps,
	TAppHeaderComponentProps,
} from './types';

// ===================================================
const View: FC<TAppHeaderComponentProps> = (props) => {
	const { logoutRequest } = props;
	const { Header } = Layout;

	const handleUserLogOut = () => {
		logoutRequest();
	};

	return (
		<Header className="header">
			<div className="header-wrapper">
				<h1 className="header-title">Header</h1>
				<Button onClick={handleUserLogOut} type="primary">
					Выйти
				</Button>
			</div>
		</Header>
	);
};

// ================= Container: =================
const mapStateToProps = (store: IStoreState): IAppHeaderMapStateToProps => {
	return { store };
};
const mapDispatchToProps: IAppHeaderMapDispatchToProps = { logoutRequest };
const AppHeader = connect(mapStateToProps, mapDispatchToProps)(View);

export default AppHeader;
