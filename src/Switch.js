import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
	width: 200px;
	display: flex;
`;

const Prev = styled.span`
	flex: 1;
	text-align: center;
`;

const Text = styled.span`
	flex: 5;
	text-align: center;
`;

const Next = styled.span`
	flex: 1;
	text-align: center;
`;

export default class Switch extends React.PureComponent {
	render() {
		return (
			<Container>
				<Prev><FontAwesomeIcon icon="chevron-left" /></Prev>
				<Text>May 2018</Text>
				<Next><FontAwesomeIcon icon="chevron-right" /></Next>
			</Container>
		)
	}
}
