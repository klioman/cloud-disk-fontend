import React from 'react';
import { render } from '@testing-library/react';

import AppBreadcrumbs from 'components/Breadcrumbs';

describe('Breadcrumbs component:', () => {
	it('Breadcrumbs component must be render', () => {
		render(<AppBreadcrumbs />);
		expect(<AppBreadcrumbs />).toBeTruthy();
	});
});
