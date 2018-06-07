import React from "react";
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'

import {
    setEndDate,
    setStartDate,
    setTextFilter,
    showAll,
    sortByAmount,
    sortByDate
} from '../actions/filters'


export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        console.log(startDate, endDate);
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortByChange = (e) => {
        if (e.target.value === 'amount') {
            this.props.sortByAmount()
        } else if (e.target.value === 'date') {
            this.props.sortByDate()
        }
    }

    showAll = () => {
        this.props.showAll()
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="input-text"
                            type="text"
                            defaultValue={this.props.filters.text}
                            onChange={this.onTextChange}
                            placeholder="Search expenses"
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortByChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            endDate={this.props.filters.endDate}
                            focusedInput={this.state.calendarFocused}
                            isOutsideRange={() => false}
                            numberOfMonths={1}
                            onDatesChange={this.onDatesChange}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            startDate={this.props.filters.startDate}
                            startDateId="startDate"
                            endDateId="endDate"
                        />
                    </div>
                    <button
                        className="button button--show-all"
                        onClick={this.showAll}
                    >
                        Show All
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setEndDate: (date) => dispatch(setEndDate(date)),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    showAll: () => dispatch(showAll()),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
