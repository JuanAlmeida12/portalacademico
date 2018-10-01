import React, { Component } from 'react';
import FirebaseService from "../../services/FirebaseService";
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { browserHistory } from 'react-router'
import './auth.css'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
  }

  login = (event) => {
    event.preventDefault();
    const {email} = this.state;
    const {password} = this.state;
    FirebaseService.login(email, password)
        .then(() => {
          browserHistory.push('/home');
          alert('logado');
        })
        .catch(error => {
            alert(error.message);
        });
  };

  handleChange = name => event => {
    this.setState({
        [name]: event.target.value,
    })
  }

  render() {
    return (
      <div className="col-md-4 login-box center-div">
      <h1>Portal Acadêmico</h1>
      <hr className="my-2" />
        <Form onSubmit={this.login}>
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
                <Button color="info">Login</Button>
              </div>
              <div className="col-md-4" style={{paddingTop:'10px'}} >
                <Button onClick={() => browserHistory.push('/register')}>Registrar</Button>
              </div>              
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}