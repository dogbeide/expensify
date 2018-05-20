import { Link } from 'react-router-dom'
import React from 'react'

import { removeExpense } from '../actions/expenses'


const Expense = ({description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`} >
            <h3>{description}</h3>
        </Link>
        <p>{amount} cents </p>
        <p>Created at: {createdAt}</p>
        <hr/>
    </div>
)

export default Expense