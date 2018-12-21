import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
	width: 200px;
	table-layout: fixed;
`;

const Grid = styled.td`
	text-align: center;
	padding-top: 10px;
	color: ${(props) => props.outside ? '#eee' : '#000'}
`;

export default class DayTable extends React.PureComponent {
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
					<tr>
						<Grid outside>29</Grid>
						<Grid outside>30</Grid>
						<Grid>1</Grid>
						<Grid>2</Grid>
						<Grid>3</Grid>
						<Grid>4</Grid>
						<Grid>5</Grid>
					</tr>
					<tr>
						<Grid>6</Grid>
						<Grid>7</Grid>
						<Grid>8</Grid>
						<Grid>9</Grid>
						<Grid>10</Grid>
						<Grid>11</Grid>
						<Grid>12</Grid>
					</tr>
				</tbody>
			</Table>
		)
	}
}
