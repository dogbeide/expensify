import moment from 'moment'
import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters'


test('should gen set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should gen set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should gen set text filter action object with no args', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    })
})

test('should gen set text filter action object with args', () => {
    const action = setTextFilter("testing 123")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "testing 123"
    })
})

test('should gen sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should gen sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})