import { SUBJECT_PAGE_ACTIONS } from '../../utils/actionsTypes'

const INITIAL_STATE = { subject: {}, fetched: false }

export default (state = INITIAL_STATE, action) => {
    if (action.type === SUBJECT_PAGE_ACTIONS.FETCHED) {
        console.log('aaaaaaaaaaaaaaaaaaaaaa', action.payload)
        return { ...state, subject: action.payload, fetched:true }
    }

    if (action.type === SUBJECT_PAGE_ACTIONS.STUDENT_REGISTRED) {
        return { ...state, subject: action.payload, fetched: false }
    }
    
    return state
}
