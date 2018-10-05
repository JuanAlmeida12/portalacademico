import FirebaseService from '../../services/FirebaseService'
import * as LoadingActions from '../../shared/loadingActions'
import { SUBJECT_PAGE_ACTIONS } from '../../utils/actionsTypes'
import COLLECTIONS from '../../utils/collections'

export const fetchSubject = (id) => dispatch => {
    dispatch(LoadingActions.startLoading())
    FirebaseService.getSubject(id , (data, error) => {
        dispatch(LoadingActions.stopLoading())
        if(!error) {
            dispatch(fetchCompletedAction(data))
        }
    })
}

export const update = subject => dispatch => {
    //dispatch(LoadingActions.startLoading())
    FirebaseService.updateData(COLLECTIONS.SUBEJECTS,subject.id, subject, (data, error) => {
        //dispatch(LoadingActions.stopLoading())
        if(!error) {
            dispatch(fetchSubject(data))
        }
    })
}

export const registerInSubject = (subject, student) => dispatch => {
    //dispatch(LoadingActions.startLoading())
    FirebaseService.subjectRegisterStudent(subject, student, (error) => {
       // dispatch(LoadingActions.stopLoading())
        if(!error) {
            dispatch(fetchSubject(subject.id))
        } else {
            
        }
    })
}

export const fetchCompletedAction = (data) => ({ type: SUBJECT_PAGE_ACTIONS.FETCHED, payload: data })