import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Row, Container } from 'reactstrap';
import { browserHistory } from 'react-router'
import { login } from './authActions'

import './auth.css'

export class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
  }
  
  handleChange = name => event => {
    this.setState({
        [name]: event.target.value,
    })
  }

  handleLogin = event => {
    event.preventDefault()    
    let { email, password } = this.state
    this.props.loginFunc(email, password)
  }

  render() {
    return (
      <Container>
        <div className="col-md-4 login-box center-div">
        <h1>Portal Acadêmico</h1>
        <hr className="my-2" />
          <Form onSubmit={this.handleLogin}>
              <FormGroup>
              <Label for="userEmail">Email</Label>
              <Input type="email" name="email" id="userEmail" onChange={this.handleChange('email')} placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="userPassword">Password</Label>
              <Input type="password" name="password" id="userPassword" onChange={this.handleChange('password')} placeholder="Senha" />
            </FormGroup>
            <FormGroup>
              <Row>
                <div className="col-md-8" style={{padding:'10px'}}>
                  <Button id="loginBt" color="info">Login</Button>
                </div>
                <div className="col-md-4" style={{paddingTop:'10px'}} >
                  <Button id="registerBt" onClick={() => browserHistory.push('/register')}>Registrar</Button>
                </div>              
              </Row>
            </FormGroup>
          </Form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ loading: state.loading })
const mapDispatchToProps = dispatch =>  ({
  loginFunc: (email, password) => dispatch(login(email, password))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)