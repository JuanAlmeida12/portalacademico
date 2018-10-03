import { combineReducers } from 'redux'
import authReducer from './pages/auth/authReducer'
import dashboadReducer from './pages/dashboard/dashboardReducer'
import loadingReducer from './shared/loadingReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    dashboard : dashboadReducer,
    loading: loadingReducer
})

export default rootReducer