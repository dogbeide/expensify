import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'


let wrapper, startAddExpense, history

beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <AddExpensePage
            startAddExpense={startAddExpense}
            history={history}
        />
    )
})

test('should render AddExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})
