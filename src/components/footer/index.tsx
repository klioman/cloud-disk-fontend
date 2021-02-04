import React, { FC } from 'react';
import { Layout } from 'antd';

// ==========================================:
const Footer: FC = () => {
	const { Footer } = Layout;

	return (
		<Footer style={{ textAlign: 'center', padding: '0 15px 15px' }}>
			&copy;
			{` Все права защищены. 2020 - ${new Date().getFullYear()} `}
		</Footer>
	);
};

export default Footer;
