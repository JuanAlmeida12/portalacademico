import React from 'react'
import { Button } from 'reactstrap'
import { browserHistory } from 'react-router'
import { getStatusString } from '../../../utils/subjectsStatus'

export default class SubjectsItens extends React.Component {

    render() {
        const list = this.props.subjects
        return list.map(subject => (
            <tr>
                <td>{subject.name}</td>
                <td>{subject.period}</td>
                <td>{subject.professor.name}</td>
                <td>{getStatusString(subject.status)}</td>
                <td><Button outline color="info" onClick={ () => browserHistory.push(`${subject.page}`) }>Página</Button></td>
            </tr>
        ))
    }
}