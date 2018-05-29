import authReducer from '../../reducers/auth'


const defaultState = {}

test('should init default state', () => {
    const action = { type: '@@INIT' }
    const state = authReducer(defaultState, action)
    expect(state).toEqual(defaultState)
})

test('should set uid on login', () => {
    const uid = 'uid'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer(defaultState, action)
    expect(state).toEqual({ uid })
})

test('should remove uid on logout', () => {
    const uid = 'uid'
    const action = { type: 'LOGOUT' }
    const state = authReducer({ uid }, action)
    expect(state).toEqual({})
})
