import React, { FC } from 'react';
import { Button, Layout, Space, Switch } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Logo from 'assets/image/icons/cloud.svg';
import { TAppHeaderComponentProps } from './types';

// ==========================================:
const View: FC<TAppHeaderComponentProps> = (props) => {
	const { darkTheme, logoutRequest, darkColorThemeToggle } = props;
	const { Header } = Layout;

	const handleUserLogOut = () => {
		logoutRequest();
	};

	const handleSwitchChange = () => {
		darkColorThemeToggle();
	};

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

export { View };
