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
			year, // string
			month, // string
			day, // string
			tableType: 'day' // 'day', 'month', 'year'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeTable = this.handleChangeTable.bind(this);
		this.handlePrevOrNext = this.handlePrevOrNext.bind(this);
	}

	padNum(num, l) {
		return num.toString().padStart(l, '0');
	}

	handleChange(changeType, changeTo) {
		switch (changeType) {
			case 'day':
				this.setState({
					year: this.padNum(changeTo.year, 4),
					month: this.padNum(changeTo.month, 2),
					day: this.padNum(changeTo.day, 2),
					tableType: 'day'
				});
				break;
			case 'month':
				this.setState({
					month: this.padNum(changeTo, 2),
					day: '01',
					tableType: 'day'
				});
				break;
			case 'year':
			default:
				this.setState({
					year: this.padNum(changeTo, 4),
					month: '01',
					tableType: 'month'
				});
				return;
		}
	}

	handleChangeTable() {
		switch (this.state.tableType) {
			case 'day':
				this.setState({
					tableType: 'month'
				});
				break;
			case 'month':
				this.setState({
					tableType: 'year'
				});
				break;
			default:
				return;
		}
	}

	handlePrevOrNext(type) {
		switch (this.state.tableType) {
			case 'day':
				const { year, month, day } = this.state;
				const [newYear, newMonth, newDay] = moment(`${ year }-${ month }-${ day }`).add(type, 'month').date(1).format('YYYY-MM-DD').split('-');
				this.setState({
					year: newYear,
					month: newMonth,
					day: newDay
				});
				break;
			case 'month':
				this.setState({
					year: this.padNum(+this.state.year + type, 4),
					month: '01'
				});
				break;
			case 'year':
			default:
				let tmpYear = +this.state.year + 10 * type;
				tmpYear -= (tmpYear % 10);
				this.setState({
					year: this.padNum(tmpYear, 4)
				});
				break;
		}
	}

	render() {
		return (
			<Container>
				<Switch
					year={ this.state.year }
					month={ this.state.month }
					type={ this.state.tableType }
					onChange={ this.handleChangeTable }
					onPrev={() => { this.handlePrevOrNext(-1) }}
					onNext={() => { this.handlePrevOrNext(1) }}
				/>
				<TableContainer
					year={ this.state.year }
					month={ this.state.month }
					day={ this.state.day }
					type={ this.state.tableType }
					onChange={ this.handleChange }
				/>
			</Container>
		);
	}
}
