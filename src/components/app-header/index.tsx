import React, { FC } from 'react';
import { Avatar, Button, Layout, Dropdown, Menu, Space, Switch } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { IStoreState } from 'redux/types';
import { logoutRequest } from 'redux/reducers/auth/reducer';
import Logo from 'assets/image/icons/cloud.svg';
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

	const handleSwitchChange = (checked: boolean) => {
		// less variables that will be used here must be declared in themeVariables on config-overrides.js

		window.less.modifyVars({
			'@primary-color': checked ? '#1c66a5' : '@blue-6',
		});
	};

	const menu = (
		<Menu>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
					1st menu item 1st
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
					2nd menu item 2nd
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
					3rd menu item 3rd
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<Header className="header">
			<div className="header-wrapper">
				<div className="header-logo">
					<span className="header-logo__text">Y</span>
					<img className="header-logo__image" src={Logo} alt="logo" />
					<span className="header-logo__subtitle">Cloud</span>
				</div>

				<div>
					<Space>
						Change Color
						<Switch onChange={handleSwitchChange} />
					</Space>
					<Dropdown overlay={menu} placement="bottomRight" arrow>
						<Avatar icon={<UserOutlined />} />
					</Dropdown>

					<Button
						className="logout-btn"
						icon={<LogoutOutlined />}
						onClick={handleUserLogOut}
						type="primary"
					>
						Выйти
					</Button>
				</div>
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
