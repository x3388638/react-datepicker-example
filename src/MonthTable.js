import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Table = styled.table`
	width: 300px;
	table-layout: fixed;
`;

const Grid = styled.td`
	text-align: center;
	padding: 26px 0;
	border-radius: 50px;
	cursor: pointer;
	color: ${(props) => {
		if (props.selected) {
			return '#fff';
		}

		if (props.today) {
			return '#db3d44';
		}
	}};
	&:hover {
		background: #eee;
	}
	background: ${(props) => props.selected && '#db3d44 !important'}
`;

export default class MonthTable extends React.PureComponent {
	render() {
		const [currentYear, currentMonth] = moment().format('YYYY-MM').split('-');
		const monthList = [['Jan', 'Feb', 'Mar', 'Apr'], ['May', 'Jun', 'Jul', 'Aug'], ['Sep', 'Oct', 'Nov', 'Dec']];
		const map = {
			'Jan': 1,
			'Feb': 2,
			'Mar': 3,
			'Apr': 4,
			'May': 5,
			'Jun': 6,
			'Jul': 7,
			'Aug': 8,
			'Sep': 9,
			'Oct': 10,
			'Nov': 11,
			'Dec': 12
		};

		return (
			<Table>
				<tbody>
					{
						monthList.map((monthGroup, i) => (
							<tr key={ i }>
								{
									monthGroup.map((month, j) => {
										let isCueentMonth = false;
										let selected = false
										if (+this.props.year === +currentYear &&
											map[month] === +currentMonth) {
											isCueentMonth = true;
										}

										if (+map[month] === +this.props.month) {
											selected = true;
										}

										return <Grid key={ j } today={ isCueentMonth } selected={ selected }>{ month }</Grid>;
									})
								}
							</tr>
						))
					}
				</tbody>
			</Table>
		)
	}
}
