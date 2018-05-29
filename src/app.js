import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import AppRouter from './routers/AppRouter'
import configStore from './store/configStore'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'


const store = configStore()

const hoc = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<h3>Loading...</h3>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(hoc, document.getElementById('app'))
})

