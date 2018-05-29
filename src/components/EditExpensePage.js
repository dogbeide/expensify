import React from 'react'
import { connect } from 'react-redux'

import { editExpense, startRemoveExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'


export class EditExpensePage extends React.Component {
    onFormSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onFormSubmit}
                />
                <button
                    onClick={this.onRemove}
                >
                    Remove
                </button>
            </div>
        )
    }
}


// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(expense.id, expense))
//                     props.history.push('/')
//                     console.log('updated', expense);
//                 }}
//             />
//             <button
//                 onClick={() => {
//                     props.dispatch(removeExpense({ id: props.expense.id }))
//                     props.history.push('/')
//                 }}
//             >
//                 Remove
//             </button>
//         </div>
//     )
// }

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => {
        return expense.id === props.match.params.id
    })
})

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)