import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from './App'
import DefaultPage from '../pages/Default'

export default props => (

    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DefaultPage} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>

)