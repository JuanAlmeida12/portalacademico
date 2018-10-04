import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Jumbotron, Container } from 'reactstrap'
import { fetchSubject, registerInSubject, update } from './subjectActions'
import { getStatusString } from '../../utils/subjectsStatus'
import SubjectOptions from './components/subjectOptions'
import StudentsTable from './components/studentsTable'

export class SubjectPage extends Component {
  
  constructor(props) {
    super(props)
     this.handleClick = this.handleClick.bind(this)
     this.handleSelect = this.handleSelect.bind(this)
     this.updateScores =this.updateScores.bind(this)
     this.handleStudent = this.handleStudent.bind(this)
  }

  componentDidMount() {
    const { fetch, params, fetched } = this.props
    if(!fetched) {
      fetch(params.id)
    }
  }

  handleStudent = () => {
    const { user, subject, register } = this.props
    const student = {
      uid: user.uid,
      name: user.name,
      score1: 0,
      score2: 0,
      score3: 0, 
      registered: true
    }
    register(subject, student)
  }

  handleClick = event => {
    event.preventDefault()
    this.handleStudent()
  }

  updateScores = (scores) => {
    const { subject, update } = this.props
    subject.students = scores
    update(subject)
  }

  handleSelect = event => {
    let newStatus = event.target.value
    const { subject, update } = this.props
    subject.status = newStatus

    update(subject)
  }

  getInclass = () =>{
    const { user, subject } = this.props
    const students = subject.students
    if(students) {
      return students[user.uid]
    }
    
    return false
  }

  render() {
    let { user, subject } = this.props
    return (
      <Col sm='12'>
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <Row>
                <Col sm='9'>
                  <h1 className="display-3">{ subject.name }</h1><span hidden={ user.utype==='0' }>
                  <p>{ getStatusString(subject.status) }</p></span>
                </Col>
                <Col sm='3'>
                  <SubjectOptions 
                    user_t={user.utype} 
                    subject_status={subject.status} 
                    handleClick={this.handleClick} 
                    handleSelect={this.handleSelect} 
                    inclass={this.getInclass()}/>
                </Col>
              </Row>
              <hr className="my-2" />
              <p className="lead">{ subject.description }</p>
              <br/>
              <h4>Alunos</h4>
              <StudentsTable students= {subject.students} 
                pushStudents ={this.updateScores}
                editable={ (user.utype === '0' && user.uid === (subject.professor?subject.professor:{}).uid) }/>
            </Container>
          </Jumbotron>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = state => ({ user: state.auth.user, subject: state.subject_page.subject, fetched: state.subject_page.fetched })

const mapDispatchToProps = dispatch => bindActionCreators({
  fetch: id => fetchSubject(id),
  register: (subject, student) => registerInSubject(subject, student),
  update: subject => update(subject)
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(SubjectPage)