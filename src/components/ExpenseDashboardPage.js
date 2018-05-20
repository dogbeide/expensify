import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseListHeader from './ExpenseListHeader'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseListHeader />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage