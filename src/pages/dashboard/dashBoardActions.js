import FirebaseService from '../../services/FirebaseService'
import { DASHBOARD_ACTIONS } from '../../utils/actionsTypes'
import COLLECTIONS from '../../utils/collections'

export const fetchSubjects = (user) => dispatch => {
    dispatch(fetchingDataAction())
    FirebaseService.getSubjectsList(user.uid, user.utype, data => {
        dispatch(fetchCompletedAction(data))
    })
}

export const addSubject = subject => dispatch => {
    FirebaseService.pushData(COLLECTIONS.SUBEJECTS, subject, (data, error) => {
        if (error) {
            alert(`Não foi possivel adicionar: ${error.message}`)
        } else {
            dispatch(addSubjectAction(data))
        }
    })
}

export const removeSubject = subject => dispatch => {
    FirebaseService.remove(COLLECTIONS.SUBEJECTS, subject, (data, error) => {
        if (error) {
            alert(`Não foi possivel Remover: ${error.message}`)
        } else {
            dispatch(removeSubjectAction(data))
        }
    })
}

export const fetchingDataAction = () => ({ type: DASHBOARD_ACTIONS.FETCHING })

export const addSubjectAction = (data) => ({ type: DASHBOARD_ACTIONS.ADD, payload: data })

export const removeSubjectAction = (data) => ({ type: DASHBOARD_ACTIONS.REMOVE, payload: data })

export const fetchCompletedAction = (data) => ({ type: DASHBOARD_ACTIONS.FETCHED, payload: data })