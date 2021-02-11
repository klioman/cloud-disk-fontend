import React, { FC } from 'react';
import { Layout } from 'antd';

// ==========================================:
const Footer: FC = () => {
	const { Footer } = Layout;

	return (
		<Footer className="app-footer">
			{`2020 - ${new Date().getFullYear()}. `}
			&copy; Все права защищены.
		</Footer>
	);
};

export default Footer;
