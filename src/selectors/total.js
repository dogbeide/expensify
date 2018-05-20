const getExpensesTotal = (expenses) => {
    if (Array.isArray(expenses)) {
        return expenses.reduce((total, expense) => (
            total + expense.amount
        ), 0)
    } else {
        return expenses ? expenses.amount : 0
    }
}

export default getExpensesTotal