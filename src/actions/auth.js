import { firebase, googleAuthProvider } from '../firebase/firebase'

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut()
    }
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () =>({
    type: 'LOGOUT'
})