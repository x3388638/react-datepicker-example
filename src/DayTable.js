import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
	width: 200px;
	table-layout: fixed;
`;

const Grid = styled.td`
	text-align: center;
	padding-top: 10px;
	cursor: pointer;
	color: ${(props) => {
		if (props.outside) {
			return '#eee';
		} else {
			if (props.selected) {
				return '#fff'
			}

			if (props.today) {
				return '#db3d44'
			}

			return '#000'
		}
	}}
	&:hover {
		background: #eee;
	}
	background: ${(props) => props.selected && '#db3d44 !important'}
`;

export default class DayTable extends React.PureComponent {
	constructor(props) {
		super(props);
		this.handleSelectDay = this.handleSelectDay.bind(this);
	}

	handleSelectDay(date) {
		console.log(date);
	}

	render() {
		return (
			<Table>
				<thead>
					<tr>
						<th>Su</th>
						<th>Mo</th>
						<th>Tu</th>
						<th>We</th>
						<th>Th</th>
						<th>Fr</th>
						<th>Sa</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.days.map((week, i) => (
							<tr key={ i }>
								{
									week.map((day, j) => (
										<Grid
											key={ j }
											outside={ day.outside }
											today={ day.today }
											selected={ day.selected }
											onClick={() => { this.handleSelectDay(day) }}
										>
											{ day.day }
										</Grid>
									))
								}
							</tr>
						))
					}
				</tbody>
			</Table>
		)
	}
}
