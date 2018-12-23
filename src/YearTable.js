import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Table = styled.table`
	width: 300px;
	table-layout: fixed;
`;

const Grid = styled.td`
	text-align: center;
	padding: 27px 0;
	border-radius: 50px;
	cursor: pointer;
	color: ${(props) => {
		if (props.outside) {
			return '#eee';
		}

		if (props.selected) {
			return '#fff';
		}

		if (props.today) {
			return '#db3d44'
		}
	}};
	&:hover {
		background: #eee;
		color: ${(props) => props.outside && '#fff'};
	}
	background: ${(props) => props.selected && '#db3d44 !important'}
`;

export default class YearTable extends React.PureComponent {
	render() {
		const selectedYear = this.props.year;
		return (
			<Table>
				<tbody>
					{
						this.props.yearList.map((yearGroup, i) => (
							<tr key={ i }>
								{
									yearGroup.map((year, j) => {
										let isCUrrent = false;
										let selected = false;
										if (+year.year === moment().year()) {
											isCUrrent = true;
										}

										if (+selectedYear === +year.year) {
											selected = true;
										}

										return (
											<Grid
												key={ j }
												outside={ year.outside }
												today={ isCUrrent }
												selected={ selected }
											>
												{ year.year }
											</Grid>
										);
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
