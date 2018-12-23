import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
	width: 300px;
	display: flex;
	margin-bottom: 10px;
`;

const Prev = styled.span`
	flex: 1;
	text-align: center;
	cursor: pointer;
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 3px;
	&:hover {
		background: #eee;
	}
`;

const Text = styled.span`
	flex: 5;
	text-align: center;
	cursor: pointer;
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 3px;
	font-weight: bold;
	&:hover {
		background: #eee;
	}
`;

const Next = styled.span`
	flex: 1;
	text-align: center;
	cursor: pointer;
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 3px;
	&:hover {
		background: #eee;
	}
`;

export default class Switch extends React.PureComponent {
	render() {
		const monthName = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		let title = '';
		switch (this.props.type) {
			case 'year':
				const start = this.props.year - (this.props.year % 10);
				const end = start + 9;
				title = `${start} - ${end}`;
				break;
			case 'month':
				title = this.props.year;
				break;
			case 'day':
			default:
				title = `${ monthName[+this.props.month] } ${ this.props.year }`;
				break;
		}

		return (
			<Container>
				<Prev onClick={ this.props.onPrev }><FontAwesomeIcon icon="chevron-left" /></Prev>
				<Text onClick={ this.props.onChange }>{ title }</Text>
				<Next onClick={ this.props.onNext }><FontAwesomeIcon icon="chevron-right" /></Next>
			</Container>
		)
	}
}
