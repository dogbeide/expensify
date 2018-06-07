import React from 'react'
import { connect } from 'react-redux'

import { startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add New</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add New</h1>
//         <ExpenseForm
//             onSubmit={(expense) => {
//                 console.log(expense);
//                 // props.dispatch(addExpense(expense))
//                 props.onSubmit(expense)
//                 props.history.push('/')
//             }}
//         />
//     </div>
// )

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(null, mapDispatchToProps)(AddExpensePage)
