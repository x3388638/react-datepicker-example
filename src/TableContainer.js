import React from 'react';
import DayTable from './DayTable';
import MonthTable from './MonthTable';
import YearTable from './YearTable';
import moment from 'moment';

export default class TableContainer extends React.PureComponent {
	render() {
		const { year, month, day } = this.props;
		const today = moment().format('YYYY-MM-DD');
		switch (this.props.type) {
			case 'day':
				const days = [];

				// 前個月的部分
				const firstDayOfWeek = moment(`${ year }-${ month }-01`).day();
				const dayOfLastMonth = moment(`${ year }-${ month }-01`).date(0).date();
				const [yearOflastMonth, lastMonth] = moment(`${ year }-${ month }-01`).date(0).format('YYYY-MM').split('-');
				for (let i = 0; i < firstDayOfWeek; i ++) {
					days.unshift({
						year: yearOflastMonth,
						month: lastMonth,
						day: dayOfLastMonth - i,
						outside: true
					});
				}

				// 當月的部分
				const lastDayOfMonth = moment(`${ year }-${ month }-01`).add(1, 'month').date(0).date();
				for (let i = 1; i <= lastDayOfMonth; i ++) {
					days.push({
						year,
						month,
						day: i,
						today: `${ year }-${ month }-${ i }` === today,
						selected: i === +day
					});
				}
				
				// 下個月的部分
				const [yearOfNextMonth, nextMonth] = moment(`${ year }-${ month }-01`).add(1, 'month').format('YYYY-MM').split('-');
				for (let i = 1; i <= 11; i ++) {
					days.push({
						year: yearOfNextMonth,
						month: nextMonth,
						day: i,
						outside: true
					});
				}

				const rows = [[], [], [], [], [], []];
				days.forEach((val, i) => {
					const index = parseInt(i / 7);
					if (index > 5) {
						return;
					}

					rows[index].push(val);
				});

				return <DayTable days={ rows }/>
		}
	}
}
