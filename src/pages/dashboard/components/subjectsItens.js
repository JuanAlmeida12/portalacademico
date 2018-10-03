import React from 'react'
import { ListGroupItem } from 'reactstrap'

export default class SubjectsItens extends React.Component {
    render() {
        const list = this.props.subjects 
        return list.map(subject => (
            <ListGroupItem className="justify-content-between">{subject.name}</ListGroupItem>
        ))
    }
}