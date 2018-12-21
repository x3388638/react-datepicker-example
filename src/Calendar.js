import React from 'react';
import moment from 'moment'
import styled from 'styled-components';

import Switch from './Switch';
import TableContainer from './TableContainer';

const Container = styled.div`
	display: inline-block;
	border: 1px solid #afafaf;
	padding: 20px 15px 40px 15px;
	box-shadow: 0 0 10px 0px #afafaf;
`;

export default class Calendar extends React.PureComponent {
	constructor (props) {
		super(props);
		const [year, month, day] = moment().format('YYYY-MM-DD').split('-');
		this.state = {
			year,
			month,
			day,
			tableType: 'day' // 'day', 'month', 'year'
		};
	}

	render() {
		return (
			<Container>
				<Switch year={ this.state.year } month={ this.state.month } />
				<TableContainer year={ this.state.year } month={ this.state.month } day={ this.state.day } type={ this.state.tableType } />
			</Container>
		);
	}
}
