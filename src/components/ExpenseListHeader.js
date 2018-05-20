import React from 'react'
import { connect } from 'react-redux';
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/total'


export const ExpenseListHeader = ({ count, total}) => count > 0 ? (
    <h3>
        {`Showing ${count} `}
        {`expense${count > 1 ? 's' : ''} `}
        {`totaling: ${numeral(total/100).format('$0,0.00')}`}
    </h3>
) : null

const mapStateToProps = (state) => {
    const selected = selectExpenses(state.expenses, state.filters) 
    return {
        count: selected.length,
        total: getExpensesTotal(selected)
    }
}

export default connect(mapStateToProps)(ExpenseListHeader)