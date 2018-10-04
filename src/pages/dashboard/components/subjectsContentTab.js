import React from 'react'
import { connect } from 'react-redux'
import TableSubjects from './tableSubjects'
import { fetchActiveSubjects, fetchOpenSubjects } from '../dashBoardActions'

export class SubjectsContentTab extends React.Component {
    componentDidMount() {
        let { fetchActive, fetchOpen, user } = this.props
        fetchActive(user)  
        fetchOpen(user)
    }
    render() {
        let { subjects_in_progress, subjects_open } = this.props
        console.log(`22222222222222222222222222222222${subjects_in_progress}`)
        return (
            <div>
                <div>
                    <h5>Em Andamento</h5>
                    <TableSubjects subjects={subjects_in_progress} />
                </div>
                <div>
                    <h5>Com Matrículas Abertas</h5>
                    <TableSubjects subjects={subjects_open} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ subjects_in_progress: state.dashboard.subjects_in_progress, subjects_open: state.dashboard.subjects_open, user: state.auth.user })
const mapDispatchToProps = dispatch =>  ({
    fetchActive: user => dispatch(fetchActiveSubjects(user)),
    fetchOpen: user => dispatch(fetchOpenSubjects(user))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(SubjectsContentTab)