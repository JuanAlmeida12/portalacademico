import React from 'react'
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubjectsItens from '../../pages/dashboard/components/subjectsItens'
Enzyme.configure({ adapter: new Adapter() })

const mockSubjects = [
    {name:'test', period:'17.1', professor:{uid: '1', name: 'Zé'}, status: '0'},
    {name:'test1', period:'17.1', professor:{uid: '2', name: 'Zé'}, status: '0'},
    {name:'test2', period:'17.1', professor:{uid: '3', name: 'Zé'}, status: '0'}
]

describe('SubjectsItens Testes', () => {
    it('Testar renderizar componente', () => {
        Enzyme.shallow(
            <SubjectsItens subjects={mockSubjects}/>
        )
    })

    it('Testar se renderizou todos os filhos', () => {
        const wrapper = Enzyme.shallow(
            <SubjectsItens subjects={mockSubjects}/>
        )

        expect(wrapper.getElements().length).toEqual(3)
    })
    
})
