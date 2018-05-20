import { createStore } from 'redux'


// Reducers
// 1. Pure functions:
//      - i.e.) doesn't interact with things outside of foo scope
//          * depend only on input args
//          * don't change things outside of foo scope
// 2. Never change state or action

const countReducer = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment = action.amount ? action.amount : 1
            return {
                count: state.count + increment
            }
        case 'DECREMENT':
            const decrement = action.amount ? action.amount : 1
            return {
                count: state.count - decrement
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
})

const store = createStore(countReducer)

// runs every time the store changes
// returns: callable unsubscribe() function
// unsubscribe() stops callback fn calls for future dispatches
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})



// Action generator - foo that returns an action object

const incrementCount = ({ amount = 1 } = {}) => ({
    type: 'INCREMENT',
    amount
})

const decrementCount = ({ amount = 1 } = {}) => ({
    type: 'DECREMENT',
    amount
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})



// Action - an object that gets sent to the store
// createStore() runs on every action dispatch

// walk, stop_walking, sit, work, stop_working, sleep, wake up...
// increment, decrement, reset


///
store.dispatch({
    type: 'INCREMENT',
    amount: 5
})
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch(incrementCount({ amount: 12 }))
store.dispatch(incrementCount())


///
store.dispatch({
    type: 'DECREMENT',
    amount: 10
})
store.dispatch({
    type: 'DECREMENT'
})
store.dispatch(decrementCount())
store.dispatch(decrementCount({ amount: 30 }))


///
store.dispatch({
    type: 'RESET'
})
store.dispatch(resetCount())


///
store.dispatch({
    type: 'SET',
    count: 123
})
store.dispatch(setCount({ count: 999 }))