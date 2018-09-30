import React, { Component } from 'react';
//import FirebaseService from "../../services/FirebaseService";
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import './auth.css'

export default class DefaultPage extends Component {
  render() {
    return (
      <div className="col-md-4 login-box center-div">
      <h1>Portal Acadêmico</h1>
      <hr className="my-2" />
        <Form>
            <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input type="email" name="email" id="userEmail" placeholder="Usuário" />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Password</Label>
            <Input type="password" name="password" id="userPassword" placeholder="Senha" />
          </FormGroup>
          <FormGroup>
            <Row>
              <div className="col-md-8" style={{padding:'10px'}}>
                <Button color="info">Login</Button>
              </div>
              <div className="col-md-4" style={{paddingTop:'10px'}} >
                <Button>Registrar</Button>
              </div>              
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
