import { DASHBOARD_ACTIONS } from '../../utils/actionsTypes'

const INITIAL_STATE = { subjects: [], fetching: false }

export default (state = INITIAL_STATE, action) => {
    if (action.type === DASHBOARD_ACTIONS.FETCHING) {
        return { ...state, fetching: true }
    }

    if (action.type === DASHBOARD_ACTIONS.FETCHED) {
        return { ...state, fetching: false, subjects: action.payload }
    }

    if (action.type === DASHBOARD_ACTIONS.ADD) {
        return { ...state, subjects: state.subjects.push(action.payload) }
    }

    if (action.type === DASHBOARD_ACTIONS.REMOVE) {
        return { ...state, subjects: state.subjects.pop(action.payload) }
    }

    return state
}
