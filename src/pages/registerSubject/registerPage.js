import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { browserHistory } from 'react-router'
import { register } from './registerActions'
import PermissionDenied from '../errors/permissionDenied'

export class RegisterSubjectPage extends Component {
    constructor(props) {
        super(props)
        this.state = {name: '', description: '', period: '', status: '0'}
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }
    
    createSubject = (event) => {
        event.preventDefault()
        const { name, description, period, status } = this.state
        const { user, add } = this.props
        const professor = { name: user.name, uid: user.uid }
        
        add(name, description, period, status, professor)
        
    }

    render() {
        const { user } = this.props
        if( user.utype === '1' ) return(<PermissionDenied />)
        return (
                <Col sm={{ size:'4', offset:'4' }}>
                    <h3>Registro de Disciplina</h3>
                    <hr className="my-2" />
                    <Form onSubmit={this.createSubject}>
                        <FormGroup>
                            <Label for="subjectName">Disciplina</Label>
                            <Input type="text" name="name" id="subjectName" onChange={this.handleChange('name')} placeholder="Disciplina" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subjectDescription">Descrição</Label>
                            <Input type="textarea" name="description" id="subjectDescription" onChange={this.handleChange('description')} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subjectPeriod">Período</Label>
                            <Input type="text" name="period" id="subjectPeriod" onChange={this.handleChange('period')} placeholder="Período" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subjectStatus">Status da Disciplina</Label>
                            <Input type="select" name="status" onChange={this.handleChange('status')} id="subjectStatus">
                                <option value='0'>Matrículas Abertas</option>
                                <option value='1'>Em Andamento</option>
                                <option value='2'>Finalizada</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <div className="col-md-8" style={{padding:'10px'}}>
                                    <Button id='registerSubBt' type="submit" color="info">Registrar</Button>
                                </div>
                                <div className="col-md-4" style={{paddingTop:'10px'}} >
                                    <Button id='cancel' onClick={() =>{ browserHistory.push('/') }}>Cancelar</Button>
                                </div>              
                            </Row>
                        </FormGroup>
                    </Form>
                </Col>
        )
    }
}

const mapStateToProps = state => ({ subjects: state.dashboard.subjects, user: state.auth.user })
const mapDispatchToProps = dispatch =>  ({
    add: (name, description, period, status, user) => dispatch(register(name, description, period, status, user))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterSubjectPage)
