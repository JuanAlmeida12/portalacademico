import FirebaseService from '../../services/FirebaseService'
import { DASHBOARD_ACTIONS } from '../../utils/actionsTypes'
import { SUBJECT_STATUS } from '../../utils/subjectsStatus'

export const fetchActiveSubjects = (user) => dispatch => {
    dispatch(fetchingDataAction())
    FirebaseService.getSubjectsList(user.uid, user.utype, SUBJECT_STATUS.IN_PROGRESS , data => {
        dispatch(fetchActiveCompletedAction(data))
    })
}

export const fetchOpenSubjects = (user) => dispatch => {
    dispatch(fetchingDataAction())
    FirebaseService.getSubjectsList(null , null, SUBJECT_STATUS.OPEN , data => {
        dispatch(fetchOpenCompletedAction(data))
    })
}

export const fetchOldSubjects = (user) => dispatch => {
    dispatch(fetchingDataAction())
    FirebaseService.getAllSubjectsList(user.uid, user.utype, data => {
        dispatch(fetchOldCompletedAction(data))
    })
}


export const fetchingDataAction = () => ({ type: DASHBOARD_ACTIONS.FETCHING })

export const fetchActiveCompletedAction = (data) => ({ type: DASHBOARD_ACTIONS.FETCHED_ACTIVE, payload: data })

export const fetchOpenCompletedAction = (data) => ({ type: DASHBOARD_ACTIONS.FETCHED_OPEN, payload: data })

export const fetchOldCompletedAction = (data) => ({ type: DASHBOARD_ACTIONS.FETCHED_OLD, payload: data })