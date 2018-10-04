import FirebaseService from '../../services/FirebaseService'
import { REGISTER_SUB_ACTIONS } from '../../utils/actionsTypes'
import COLLECTIONS from '../../utils/collections'

export const register = (name, description, period, status, professor) => dispatch => {
    dispatch(addingAction())
    FirebaseService.pushData(COLLECTIONS.SUBEJECTS,{ name, description, period, status, professor }, (data, error) => {
        if(!error) {
            let page = `/subject/page/${data.id}`
            data.get().then((doc) => {
                let newData = { ...doc.data(), page, id: data.id }
                FirebaseService.updateData(COLLECTIONS.SUBEJECTS, data.id, newData, (data, error) => {
                    if(!error) {
                        dispatch(addedAction())
                    }
                })
            })
        } 
    })
}

export const addingAction = () => ({ type: REGISTER_SUB_ACTIONS.ADDING })

export const addedAction = () => ({ type: REGISTER_SUB_ACTIONS.ADDED })