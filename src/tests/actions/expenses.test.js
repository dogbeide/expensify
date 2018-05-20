import {
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses'


test('should gen remove expense action object', () => {
    const action = removeExpense({ id: 'asdf' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'asdf'
    })
})

test('should gen edit expense action object', () => {
    const action = editExpense('asdf', {
        amount: 100,
        description: 'testing 123'
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'asdf',
        updates: {
            amount: 100,
            description: 'testing 123'
        }
    })
})

test('should gen add expense action object with provided values', () => {
    const expenseData = {
        amount: 100000,
        createdAt: 999999,
        description: 'testing 123',
        note: 'testing 456'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should gen add expense object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            amount: 0,
            createdAt: 0,
            description: '',
            id: expect.any(String),
            note: ''
        }
    })
})
