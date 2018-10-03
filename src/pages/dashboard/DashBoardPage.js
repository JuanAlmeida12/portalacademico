import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomNavBar from './components/navbar'
import InfoTable from './components/infoTable'

export class DashBoardPage extends Component {
  render() {
    let { user } = this.props
    return (
      <div className='container'>
          <CustomNavBar />
        <div className='row'>
          <InfoTable user={user} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps)(DashBoardPage)