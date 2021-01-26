import React, { FC } from 'react';
import BasicLayout from 'layouts/base';
import HomeContent from 'contents/home';

const Home: FC = () => {
	return (
		<BasicLayout>
			<HomeContent />
		</BasicLayout>
	);
};

export default Home;
