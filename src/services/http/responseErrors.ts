import { AxiosError } from 'axios';
import { Notify } from 'services/notify';

const responseErrors = (error: AxiosError) => {
	const { response } = error;

	if (response) {
		const { status, statusText, config, data } = response;
		const { url } = config;

		switch (status) {
			case 400: // Bad request
				if (!url) {
					Notify.error('Something went wrong');
				}
				break;

			case 500: // Internal Server Error
				if (!url) {
					Notify.error('Server error. Please, try again later');
				}
				break;

			default:
				// Default error handler
				// eslint-disable-next-line no-console
				console.error(
					'Status => ',
					status,
					'\n',
					'Status text => ',
					statusText,
					'\n',
					'Request config => ',
					config,
					'\n',
					'Response data => ',
					data,
					'\n',
				);
				break;
		}
	}
};

export default responseErrors;
