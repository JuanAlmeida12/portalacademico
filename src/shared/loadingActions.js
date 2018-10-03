import { LOAD_ACTIONS } from '../utils/actionsTypes'

export const startLoading = () => ({ type: LOAD_ACTIONS.START })

export const stopLoading = () => ({ type: LOAD_ACTIONS.STOP })