import FirebaseService from '../../services/FirebaseService'
import * as LoadingActions from '../../shared/loadingActions'
import { AUTH_ACTIONS } from '../../utils/actionsTypes'

export const login = (email, password) => dispatch => {
        dispatch(LoadingActions.startLoading())
        FirebaseService.login(email, password)
        .then((user) => {
            FirebaseService.getUserExtraInfo(user.uid, info => {
                dispatch(LoadingActions.stopLoading())
                dispatch({type: AUTH_ACTIONS.LOGIN, payload: { ...user,  ...info}})
            })
        })
        .catch(error => {
            alert("Falha no Login")
        });
    }

export const logout = () => ({ type: AUTH_ACTIONS.LOGOUT })
