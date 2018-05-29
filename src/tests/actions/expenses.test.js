import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
    addExpense,
    editExpense,
    removeExpense,
    startAddExpense,
    startSetExpenses,
    setExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import db from '../../firebase/firebase'


const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    db.ref('expenses').set(expensesData).then(() => done())
})

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
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        description: expenses[0].description,
        note: expenses[0].note
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add default expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

// test('should gen add expense object with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             amount: 0,
//             createdAt: 0,
//             description: '',
//             id: expect.any(String),
//             note: ''
//         }
//     })
// })

test('should init set expense action', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should set expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})
