import expenses from '../fixtures/expenses'
import getExpensesTotal from '../../selectors/total'

test('should return 0 with no expenses', () => {
    const total = getExpensesTotal([])
    expect(total).toBe(0)
})

test('should return a single expense amount', () => {
    const total = getExpensesTotal(expenses[0])
    expect(total).toBe(expenses[0].amount)
})

test('should return sum of all expense amounts', () => {
    const total = getExpensesTotal(expenses)
    expect(total).toBe(
        expenses[0].amount + expenses[1].amount + expenses[2].amount
    )
})
