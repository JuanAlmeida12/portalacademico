import React from 'react'
import { Table } from 'reactstrap'
import SubjectsItens from './subjectsItens'

export default class TableSubjects extends React.Component {
    render() {
        const subjects = this.props.subjects
         
        return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Disciplina</th>
                    <th>Período</th>
                    <th>Professor</th>
                    <th>Status</th>
                    <th>Página</th>
                </tr>
            </thead>
            <tbody>
                <SubjectsItens subjects={subjects} />
            </tbody>
        </Table>)
    }
}