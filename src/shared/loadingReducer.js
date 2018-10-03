import { LOAD_ACTIONS } from '../utils/actionsTypes'

const INITIAL_STATE = false

export default (state = INITIAL_STATE, action) => {
    if (action.type === LOAD_ACTIONS.START) {
        return true
    }

    if (action.type === LOAD_ACTIONS.STOP) {
        return false
    }

    return state
}
