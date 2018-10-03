import FirebaseService from '../../services/FirebaseService'
import * as LoadingActions from '../../shared/loadingActions'

export const login = (email, password) => dispatch => {
        console.log('antes')
        dispatch(LoadingActions.startLoading())
        FirebaseService.login(email, password)
        .then((user) => {
            FirebaseService.getUserExtraInfo(user.uid, info => {
                console.log('antes')
                dispatch(LoadingActions.stopLoading())
                dispatch({type: 'LOGIN', payload: { ...user,  ...info}})
                console.log('depois')
            })
        })
        .catch(error => {
            alert("Falha no Login")
        });
    }
