import { login, logout } from '../../actions/auth'


test('should gen login action object', () => {
    const uid = 'uid'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should gen logout action object', () => {
    const action = logout()
    expect(action).toEqual({ type: 'LOGOUT' })
})
