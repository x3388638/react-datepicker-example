import React from 'react';
import Calendar from './Calendar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add([faChevronLeft, faChevronRight])

export default () => (
	<div style={{ padding: '30px' }}>
		<Calendar />
	</div>
);
