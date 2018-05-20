import { Link } from 'react-router-dom'
import React from 'react'
import moment from 'moment'
import numeral from 'numeral'

import { removeExpense } from '../actions/expenses'


const Expense = ({description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`} >
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
        </p>
        <p>
            {moment(createdAt).format('MMM Do, Y')}
        </p>
        <hr/>
    </div>
)

export default Expense