import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { customFilters, defaultFilters } from '../fixtures/filters'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={defaultFilters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with custom filters', () => {
    wrapper.setProps({
        filters: customFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'y'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: customFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date change', () => {
    const startDate = moment(0).add(3, 'years')
    const endDate = moment(0).add(6, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate,
        endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
    const focused = "startDate"
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
    expect(wrapper.state('calendarFocused')).toBe(focused)
})
