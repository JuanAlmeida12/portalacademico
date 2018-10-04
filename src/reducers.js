import { combineReducers } from 'redux'
import authReducer from './pages/auth/authReducer'
import dashboadReducer from './pages/dashboard/dashboardReducer'
import loadingReducer from './shared/loadingReducer'
import subject_page from './pages/subject/subjectReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    dashboard : dashboadReducer,
    loading: loadingReducer,
    subject_page
})

export default rootReducer