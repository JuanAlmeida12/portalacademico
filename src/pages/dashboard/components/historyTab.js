import React from 'react'
import { connect } from 'react-redux'
import TableSubjects from './tableSubjects'
import { fetchOldSubjects } from '../dashBoardActions'

export class HistoryTab extends React.Component {
    componentDidMount() {
        let { fetch, user } = this.props
        fetch(user)  
    }
    render() {
        let { subjects } = this.props
        return (
            <TableSubjects subjects={subjects} />
        )
    }
}

const mapStateToProps = state => ({ subjects: state.dashboard.all_subjects, user: state.auth.user })
const mapDispatchToProps = dispatch =>  ({
    fetch: user => dispatch(fetchOldSubjects(user))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HistoryTab)