import React, { FC } from 'react';
import EmptyLayout from 'layouts/empty';
import RegistrationContent from 'components/contents/registration';

const Registration: FC = () => {
	return (
		<EmptyLayout>
			<RegistrationContent />
		</EmptyLayout>
	);
};

export default Registration;
