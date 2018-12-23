import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
	width: 300px;
	table-layout: fixed;
`;

const Grid = styled.td`
	text-align: center;
	padding-top: 20px;
	cursor: pointer;
`;

export default class MonthTable extends React.PureComponent {
	render() {
		return (
			<Table>
				<tbody>
					<tr>
						<Grid>Jan</Grid>
						<Grid>Feb</Grid>
						<Grid>Mar</Grid>
						<Grid>Apr</Grid>
					</tr>
					<tr>
						<Grid>May</Grid>
						<Grid>Jun</Grid>
						<Grid>Jul</Grid>
						<Grid>Aug</Grid>
					</tr>
					<tr>
						<Grid>Sep</Grid>
						<Grid>Oct</Grid>
						<Grid>Nov</Grid>
						<Grid>Dec</Grid>
					</tr>
				</tbody>
			</Table>
		)
	}
}
