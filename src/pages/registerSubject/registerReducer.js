import { REGISTER_SUB_ACTIONS } from '../../utils/actionsTypes'

const INITIAL_STATE = { adding: false }

export default (state = INITIAL_STATE, action) => {
    if (action.type === REGISTER_SUB_ACTIONS.ADDING) {
        return { ...state, adding: true }
    }

    if (action.type === REGISTER_SUB_ACTIONS.ADDED) {
        return { ...state, adding: false }
    }
    
    return state
}
