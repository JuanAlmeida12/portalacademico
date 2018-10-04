import React, { Component } from 'react';
import FirebaseService from "../../services/FirebaseService";
import { Button, Form, FormGroup, Label, Input, Row, Container } from 'reactstrap';
import { browserHistory } from 'react-router'
import './auth.css'

export default class RegisterUserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: '', confirm_password: '', user_type: '0', name: ''}
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }
    
    createUser = (event) => {
        event.preventDefault();
        const {email, password, confirm_password, user_type, name} = this.state;
        
        if(password === confirm_password){
        FirebaseService.createUser(email, password).then(
            (user) => {
                FirebaseService.pushData(`mUsers`,{uid: user.uid, utype: user_type, name})
                browserHistory.push("/")
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )} else {
            alert("Senhas não correspondem")
        }
    }

    render() {
        return (
            <Container>
            <div className="col-md-4 login-box center-div">
            <h1>Portal Acadêmico</h1>
            <hr className="my-2" />
            <h3>Registro de Usuário</h3>
                <Form onSubmit={this.createUser}>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="email" name="email" id="userEmail" onChange={this.handleChange('email')} placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userName">Nome</Label>
                        <Input type="text" name="name" id="userName" onChange={this.handleChange('name')} placeholder="Nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Senha</Label>
                        <Input type="password" name="password" id="userPassword" onChange={this.handleChange('password')} placeholder="Senha" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userConfirmPassword">Confirmar Senha</Label>
                        <Input type="password" name="confirm_password" id="userConfirmPassword" onChange={this.handleChange('confirm_password')} placeholder="Confirmar Senha" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="statusSelect">Tipo de Usuário</Label>
                        <Input type="select" name="select" onChange={this.handleChange('user_type')} id="statusSelect">
                            <option value='0'>Professor</option>
                            <option value='1'>Aluno</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <div className="col-md-8" style={{padding:'10px'}}>
                                <Button id='registerBt' type="submit" color="info">Registrar</Button>
                            </div>
                            <div className="col-md-4" style={{paddingTop:'10px'}} >
                                <Button id='cancelBt' onClick={() =>{ browserHistory.push('/') }}>Cancelar</Button>
                            </div>              
                        </Row>
                    </FormGroup>
                </Form>
            </div>
            </Container>
        );
    }
}
