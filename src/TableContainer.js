import React from 'react';
import DayTable from './DayTable';
import MonthTable from './MonthTable';
import YearTable from './YearTable';

export default class TableContainer extends React.PureComponent {
	render() {
		return <YearTable />
	}
}
