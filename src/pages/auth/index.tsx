import React, { FC, Suspense, lazy, useState } from 'react';
import EmptyLayout from 'layouts/empty';
import SuspenseLoader from 'components/SuspenseLoader';

const Login = lazy(() => import('contents/login'));
const Registration = lazy(() => import('contents/registration'));

// ==========================================:
const Auth: FC = () => {
	const [auth, setAuth] = useState(false);
	const [formAnimation, setFormAnimation] = useState(false);

	return (
		<EmptyLayout classname={formAnimation ? 'change-form-active' : 'change-form-no-active'}>
			<Suspense fallback={<SuspenseLoader />}>
				<Login animationStatus={setFormAnimation} position={auth} changePosition={setAuth} />
				<Registration animationStatus={setFormAnimation} position={auth} changePosition={setAuth} />
			</Suspense>
		</EmptyLayout>
	);
};

export default Auth;
