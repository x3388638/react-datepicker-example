import React from 'react';
import Calendar from './Calendar';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add([faChevronLeft, faChevronRight, faCalendarAlt]);

const Container = styled.div`
	position: relative;
`;

const InputContainer = styled.div`
	display: inline-block;
	width: 150px;
`;

const Icon = styled(FontAwesomeIcon)`
	position: absolute;
	top: 8px;
	left: 10px;
`;

const Input = styled.input`
	width: 100%;
	padding: 5px 10px 5px 30px;
	font-size: 16px;
	text-align: center;
`;

export default class DatePicker extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			isCalendarOpen: false
		};

		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(date) {
		this.setState({
			date,
			isCalendarOpen: false
		});
	}

	render() {
		return (
			<Container>
				<InputContainer>
					<Icon icon="calendar-alt" />
					<Input type="text" value={ this.state.date } readOnly onFocus={() => this.setState({ isCalendarOpen: true })} />
				</InputContainer>
				{ this.state.isCalendarOpen &&
					<Calendar onSelect={ this.handleSelect } date={ this.state.date } />
				}
			</Container>
		);
	}
}
