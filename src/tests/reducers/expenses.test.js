import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'


test('should init default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id:'999',
        description: 'testing 123',
        note: '',
        createdAt: 9999,
        amount: 123
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const updates = { note: 'testing 123' }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].note).toEqual('testing 123')
})

test('should not edit an expense if id not fount', () => {
    const updates = { note: 'testing 123' }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const initState = [expenses[0]]
    const action = {
        type: 'SET_EXPENSES',
        expenses
    }
    const endState = expensesReducer(initState, action)
    expect(endState).toEqual(expenses)
})