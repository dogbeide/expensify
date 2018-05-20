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

const hoc = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(hoc, document.getElementById('app'))
