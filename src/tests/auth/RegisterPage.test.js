import React from 'react'
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegisterPage from '../../pages/auth/RegisterPage'
Enzyme.configure({ adapter: new Adapter() })

describe('RegisterPage Testes', () => {
    it('Testar renderizar componente', () => {
        Enzyme.shallow(
            <RegisterPage />
        )
    })

    it('Testar se os Inputs existem', () => {
        const wrapper = Enzyme.shallow(
            <RegisterPage />
        )

        expect(wrapper.find('#userEmail').length).toEqual(1)
        expect(wrapper.find('#userPassword').length).toEqual(1)
        expect(wrapper.find('#userName').length).toEqual(1)
        expect(wrapper.find('#userConfirmPassword').length).toEqual(1)
        expect(wrapper.find('#statusSelect').length).toEqual(1)
    })

    it('Testar se os botões existem', () => {
        const wrapper = Enzyme.shallow(
            <RegisterPage />
        )

        expect(wrapper.find('#cancelBt').length).toEqual(1)
        expect(wrapper.find('#registerBt').length).toEqual(1)
    })
})
