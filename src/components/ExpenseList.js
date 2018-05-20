import React from 'react'
import { connect } from 'react-redux'

import Expense from './Expense'
import ExpenseListHeader from './ExpenseListHeader'
import getExpensesTotal from '../selectors/total'
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <Expense key={expense.id} {...expense} />
                ))
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)