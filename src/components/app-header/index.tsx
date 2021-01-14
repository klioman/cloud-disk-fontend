import React, { FC } from 'react';
import { Avatar, Button, Layout, Dropdown, Menu, Space, Switch } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { IStoreState } from 'redux/types';
import { logoutRequest } from 'redux/reducers/auth/reducer';
import darkVars from 'dark.json';
import lightVars from 'light.json';
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
		const vars = checked ? darkVars : lightVars;

		window.less.modifyVars(vars);
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
						<span style={{ color: '#ffffff' }}>Change Color</span>
						<Switch onChange={handleSwitchChange} />
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
const mapStateToProps = (store: IStoreState): IAppHeaderMapStateToProps => {
	return { store };
};
const mapDispatchToProps: IAppHeaderMapDispatchToProps = { logoutRequest };
const AppHeader = connect(mapStateToProps, mapDispatchToProps)(View);

export default AppHeader;
