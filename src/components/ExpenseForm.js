import moment from 'moment'
import React from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import expensesReducer from '../reducers/expenses';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            description: props.expense ? props.expense.description : '',
            error: '',
            calendarFocused: false,
            note: props.expense ? props.expense.note : '',
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        // Directly accessing synthetic events in callback gives warning
        // must assign or persist first

        // const note = e.target.value
        e.persist()
        this.setState(() => ({ note: e.target.value }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please add description and amount' }))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                description: this.state.description,
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        autoFocus
                        onChange={this.onDescriptionChange}
                        placeholder="Description"
                        type="text"
                        value={this.state.description}
                    />
                    <input
                        onChange={this.onAmountChange}
                        placeholder="Amount"
                        // type="number" // too many decimals
                        type="text"
                        value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        focused={this.state.calendarFocused}
                        isOutsideRange={() => false}
                        numberOfMonths={1}
                        onDateChange={this.onDateChange}
                        onFocusChange={this.onFocusChange}
                    />
                    <textarea
                        id=""
                        name=""
                        onChange={this.onNoteChange}
                        placeholder="Additional notes (optional)"
                        value={this.state.note}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}