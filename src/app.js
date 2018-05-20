import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configStore()

// const e1 = store.dispatch(addExpense({
//     description: 'Water bill',
//     amount: 10000,
//     createdAt: 123
// }))
// const e2 = store.dispatch(addExpense({
//     description: 'Gas bill',
//     amount: 15000,
//     createdAt: 999
// }))
// const e3 = store.dispatch(addExpense({
//     description: 'Rent',
//     amount: 100000
// }))

// const state = store.getState()
// console.log(getVisibleExpenses(state.expenses, state.filters));

const hoc = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(hoc, document.getElementById('app'))
