import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import {
	UserOutlined,
	HomeOutlined,
	ControlOutlined,
	CreditCardOutlined,
	FolderOutlined,
} from '@ant-design/icons';

// ==========================================:
const SidebarMenu: FC = () => {
	const { location } = useHistory();

	return (
		<Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} defaultSelectedKeys={['/']}>
			<Menu.Item key="/" icon={<HomeOutlined />} style={{ margin: 0 }}>
				<Link to="/">Главная</Link>
			</Menu.Item>
			<Menu.Item key="/positions" icon={<ControlOutlined />} style={{ margin: 0 }}>
				<Link to="/positions">Позиции</Link>
			</Menu.Item>
			<Menu.Item key="/orders" icon={<CreditCardOutlined />} style={{ margin: 0 }}>
				<Link to="/orders">Заказы</Link>
			</Menu.Item>
			<Menu.Item key="/category-list" icon={<FolderOutlined />} style={{ margin: 0 }}>
				<Link to="/category-list">Категории</Link>
			</Menu.Item>
			<Menu.Item key="/user-list" icon={<UserOutlined />} style={{ margin: 0 }}>
				<Link to="/user-list">Пользователи</Link>
			</Menu.Item>
		</Menu>
	);
};

export default SidebarMenu;
