import React, { FC } from 'react';
import { Avatar, Button, Layout, Dropdown, Menu, Space, Switch } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { IStoreState } from 'redux/types';
import { logoutRequest } from 'redux/reducers/auth/reducer';
import { darkColorThemeToggle } from 'redux/reducers/app/reducer';
import { getDarkColorTheme } from 'redux/reducers/app/selectors';
import Logo from 'assets/image/icons/cloud.svg';

import {
	IAppHeaderMapDispatchToProps,
	IAppHeaderMapStateToProps,
	TAppHeaderComponentProps,
} from './types';

// ===================================================
const View: FC<TAppHeaderComponentProps> = (props) => {
	const { darkTheme, logoutRequest, darkColorThemeToggle } = props;
	const { Header } = Layout;

	const handleUserLogOut = () => {
		logoutRequest();
	};

	const handleSwitchChange = () => {
		darkColorThemeToggle();
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
						<span style={{ color: '#ffffff' }}>Темная тема</span>
						<Switch onChange={handleSwitchChange} checked={darkTheme} />
						<Dropdown overlay={menu} placement="bottomRight" arrow>
							<Avatar icon={<UserOutlined />} />
						</Dropdown>
					</Space>

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
const mapStateToProps = (state: IStoreState): IAppHeaderMapStateToProps => {
	return {
		darkTheme: getDarkColorTheme(state),
	};
};
const mapDispatchToProps: IAppHeaderMapDispatchToProps = { logoutRequest, darkColorThemeToggle };
const AppHeader = connect(mapStateToProps, mapDispatchToProps)(View);

export default AppHeader;
