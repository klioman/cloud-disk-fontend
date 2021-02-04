import React, { FC, useState } from 'react';
import EmptyLayout from 'layouts/empty';
import Login from 'contents/login';
import Registration from 'contents/registration';

// ==========================================:
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
