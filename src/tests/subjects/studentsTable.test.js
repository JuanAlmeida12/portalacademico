import React from 'react'
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableStudents from '../../pages/subject/components/studentsTable'
Enzyme.configure({ adapter: new Adapter() })

const mockSubjects =  {
    id1: {
        uid: '1',
        name: 'Zé',
        score1: '0',
        score2: '0',
        score3: '0',
    },
    id2: {
        uid: '2',
        name: 'Zé',
        score1: '0',
        score2: '0',
        score3: '0',
    }
}

describe('TableStudents Testes', () => {
    it('Testar renderizar componente', () => {
        Enzyme.shallow(
            <TableStudents students={mockSubjects}/>
        )
    })

    it('Testar se renderizou todos os filhos', () => {
        const wrapper = Enzyme.shallow(
            <TableStudents students={mockSubjects}/>
        )

        // Só deve retornar o no da tabela
        expect(wrapper.getElements().length).toEqual(1)
    })
    
})
