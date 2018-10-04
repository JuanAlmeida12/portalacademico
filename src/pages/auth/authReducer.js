import FirebaseService from "../../services/FirebaseService"
const INITIAL_STATE = { user: FirebaseService.getUserConnected() }

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'LOGIN') {
        let user = action.payload
        return { ...state, user}
    }

    if (action.type === 'LOGOUT') {
        FirebaseService.logout()
        return { ...state, user: null }
    }

    return state
}
