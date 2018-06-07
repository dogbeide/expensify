import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/total'


export const ExpenseListHeader = ({ count, total }) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Showing <span>{count}</span>
                {` expense${count !== 1 ? 's' : ''} `}
                totaling: <span>{numeral(total/100).format('$0,0.00')}</span>
            </h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    const selected = selectExpenses(state.expenses, state.filters) 
    return {
        count: selected.length,
        total: getExpensesTotal(selected)
    }
}

export default connect(mapStateToProps)(ExpenseListHeader)
