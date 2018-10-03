import FirebaseService from "../../services/FirebaseService";
const INITIAL_STATE = { user: null }

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'LOGIN') {
        return { ...state, user:action.payload};
    }

    if (action.type === 'LOGOUT') {
        FirebaseService.logout();
        return INITIAL_STATE;
    }

    return state;
}
