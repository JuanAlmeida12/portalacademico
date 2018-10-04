import React from 'react'
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { RegisterSubjectPage } from '../../pages/registerSubject/registerPage'
Enzyme.configure({ adapter: new Adapter() })

const loginMock = (email, passord) => {}

describe('Login Testes', () => {
    it('Testar renderizar componente', () => {
        Enzyme.shallow(
            <RegisterSubjectPage user={{ utype: '0'}} />
        )
    })

    it('Testar se os Inputs existem', () => {
        const wrapper = Enzyme.shallow(
            <RegisterSubjectPage user={{ utype: '0'}}/>
        )

        expect(wrapper.find('#subjectName').length).toEqual(1)
        expect(wrapper.find('#subjectDescription').length).toEqual(1)
        expect(wrapper.find('#subjectPeriod').length).toEqual(1)
        expect(wrapper.find('#subjectStatus').length).toEqual(1)
    })

    it('Testar se os botões existem', () => {
        const wrapper = Enzyme.shallow(
            <RegisterSubjectPage user={{ utype: '0'}}/>
        )

        expect(wrapper.find('#registerSubBt').length).toEqual(1)
        expect(wrapper.find('#cancel').length).toEqual(1)
    })

    it('Testar se os Inputs existem se o usuário não for Professor', () => {
        const wrapper = Enzyme.shallow(
            <RegisterSubjectPage user={{ utype: '1'}}/>
        )

        // Não deve renderizer nenhum desses componentes
        expect(wrapper.find('#subjectName').length).toEqual(0)
        expect(wrapper.find('#subjectDescription').length).toEqual(0)
        expect(wrapper.find('#subjectPeriod').length).toEqual(0)
        expect(wrapper.find('#subjectStatus').length).toEqual(0)
    })

    it('Testar se os botões existem se o usuário não for Professor', () => {
        const wrapper = Enzyme.shallow(
            <RegisterSubjectPage user={{ utype: '1'}}/>
        )

        // Não deve renderizer nenhum desses componentes
        expect(wrapper.find('#registerSubBt').length).toEqual(0)
        expect(wrapper.find('#cancel').length).toEqual(0)
    })
})
