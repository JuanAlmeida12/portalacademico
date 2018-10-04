import React from 'react'
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubjectOptions from '../../pages/subject/components/subjectOptions'
Enzyme.configure({ adapter: new Adapter() })

describe('SubjectOptions Testes', () => {
    it('Testar renderizar componente', () => {
        Enzyme.shallow(
            <SubjectOptions subject_status='0' inclass={false} user_t='1' />
        )
    })

    it('Testar se renderizou o botão de matricula para aluno', () => {
        const wrapper = Enzyme.shallow(
            <SubjectOptions subject_status='0' inclass={false} user_t='1' />
        )

        expect(wrapper.find('#registerBt').length).toEqual(1)
    })

    it('Testar se não renderizou o botão de matricula para o professor', () => {
        const wrapper = Enzyme.shallow(
            <SubjectOptions subject_status='0' inclass={false} user_t='0' />
        )

        expect(wrapper.find('#registerBt').length).toEqual(0)
    })

    it('Testar se renderizou as opções para o professor', () => {
        const wrapper = Enzyme.shallow(
            <SubjectOptions subject_status='0' inclass={false} user_t='0' />
        )

        expect(wrapper.find('#subjectStatus').length).toEqual(1)
    })

    it('Testar se não renderizou as opções de professor para Aluno', () => {
        const wrapper = Enzyme.shallow(
            <SubjectOptions subject_status='0' inclass={false} user_t='1' />
        )

        expect(wrapper.find('#subjectStatus').length).toEqual(0)
    })
    
})
