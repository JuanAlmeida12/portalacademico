import React, { Component } from 'react'
import { connect } from 'react-redux'

import App from './App'
import Auth from '../pages/auth/LoginPage'
import CustomLoading from '../shared/loadingComponent'


class AuthOrApp extends Component {    

    render() {
        const { user } = this.props.auth
        if (user) {
            return <CustomLoading><App>{this.props.children}</App></CustomLoading>
        } else if (!user) {
            return <CustomLoading><Auth /></CustomLoading>
        } else {
            return false
        }
    }
}


const mapStateToProps = state => {; return { auth: state.auth }}
export default connect(mapStateToProps)(AuthOrApp)