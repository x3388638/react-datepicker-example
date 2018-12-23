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
	color: ${(props) => props.outside ? '#eee' : '#000'}
`;

export default class YearTable extends React.PureComponent {
	render() {
		return (
			<Table>
				<tbody>
					<tr>
						<Grid outside>2009</Grid>
						<Grid>2010</Grid>
						<Grid>2011</Grid>
						<Grid>2012</Grid>
					</tr>
					<tr>
						<Grid>2013</Grid>
						<Grid>2014</Grid>
						<Grid>2015</Grid>
						<Grid>2016</Grid>
					</tr>
					<tr>
						<Grid>2017</Grid>
						<Grid>2018</Grid>
						<Grid>2019</Grid>
						<Grid outside>2020</Grid>
					</tr>
				</tbody>
			</Table>
		)
	}
}
