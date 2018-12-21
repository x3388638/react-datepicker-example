import React from 'react';
import DayTable from './DayTable';
import MonthTable from './MonthTable';

export default class TableContainer extends React.PureComponent {
	render() {
		return <MonthTable />
	}
}
