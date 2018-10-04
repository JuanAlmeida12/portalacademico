import { DASHBOARD_ACTIONS } from '../../utils/actionsTypes'

const INITIAL_STATE = { subjects_in_progress: [], subjects_open: [], all_subjects: [], fetching: false }

export default (state = INITIAL_STATE, action) => {
    if (action.type === DASHBOARD_ACTIONS.FETCHING) {
        return { ...state, fetching: true }
    }

    if (action.type === DASHBOARD_ACTIONS.FETCHED_ACTIVE) {
        return { ...state, fetching: false, subjects_in_progress: action.payload }
    }

    if (action.type === DASHBOARD_ACTIONS.FETCHED_OPEN) {
        return { ...state, fetching: false, subjects_open: action.payload }
    }

    if (action.type === DASHBOARD_ACTIONS.FETCHED_OLD) {
        return { ...state, fetching: false, all_subjects: action.payload }
    }

    return state
}
