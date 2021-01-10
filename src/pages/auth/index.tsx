import React, { FC, useState } from 'react';
import EmptyLayout from 'layouts/empty';
import Registration from 'components/contents/registration';
import Login from 'components/contents/login';

// =====================================:
const Auth: FC = () => {
	const [auth, setAuth] = useState(false);
	const [formAnimation, setFormAnimation] = useState(false);

	return (
		<EmptyLayout classname={formAnimation ? 'change-form-active' : 'change-form-no-active'}>
			<Login animationStatus={setFormAnimation} position={auth} changePosition={setAuth} />
			<Registration animationStatus={setFormAnimation} position={auth} changePosition={setAuth} />
		</EmptyLayout>
	);
};

export default Auth;
