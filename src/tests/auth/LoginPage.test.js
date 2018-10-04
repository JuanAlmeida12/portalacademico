import React from 'react'
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginPage } from '../../pages/auth/LoginPage'
Enzyme.configure({ adapter: new Adapter() });


const loginMock = (email, passord) => {}

describe('Login Testes', () => {
    it('Testar renderizar componente', () => {
        Enzyme.shallow(
            <LoginPage loginFunc={loginMock} />
        )
    })

    it('Testar se os Inputs existem', () => {
        const wrapper = Enzyme.shallow(
            <LoginPage loginFunc={loginMock} />
        )

        expect(wrapper.find('#userEmail').length).toEqual(1)
        expect(wrapper.find('#userPassword').length).toEqual(1)
    })

    it('Testar se os botões existem', () => {
        const wrapper = Enzyme.shallow(
            <LoginPage loginFunc={loginMock} />
        )

        expect(wrapper.find('#loginBt').length).toEqual(1)
        expect(wrapper.find('#registerBt').length).toEqual(1)
    })
})
