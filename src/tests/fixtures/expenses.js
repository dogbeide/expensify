import moment from 'moment'


const expenses = [{
    id: '1',
    description: 'Yums',
    amount: 666,
    note: '',
    createdAt: 0
}, {
    id: '2',
    description: 'Food',
    amount: 999,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Yay',
    amount: 1234,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses
