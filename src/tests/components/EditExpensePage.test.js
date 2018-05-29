import React from 'react'
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'


let wrapper, startEditExpense, startRemoveExpense, history

beforeEach(() => {
    history = { push: jest.fn() }
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[0]}
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />
    )
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(startEditExpense).toHaveBeenLastCalledWith(
        expenses[0].id,
        expenses[1]
    )
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    })
    expect(history.push).toHaveBeenLastCalledWith('/')
})