import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap'
import SubjectsItens from './subjectsItens'
import { fetchSubjects } from '../dashBoardActions'

export class SubjectsContentTab extends React.Component {
    componentDidMount() {
        let { fetch, user } = this.props
        fetch(user)  
    }
    render() {
        let { subjects } = this.props
        return (
        <ListGroup>
            <SubjectsItens subjects={subjects} />
        </ListGroup>
        )
    }
}

const mapStateToProps = state => ({ subjects: state.dashboard.subjects, user: state.auth.user })
const mapDispatchToProps = dispatch =>  ({
    fetch: user => dispatch(fetchSubjects(user))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(SubjectsContentTab)