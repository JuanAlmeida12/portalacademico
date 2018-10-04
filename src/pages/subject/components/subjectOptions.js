import React, { Component } from 'react'
import { Button, Row,Label, Input } from 'reactstrap'
import { SUBJECT_STATUS } from '../../../utils/subjectsStatus'

export default class SubjectOptions extends Component {
  render() {
    let { user_t, subject_status, handleClick, handleSelect, inclass } = this.props
    
    if(user_t === '1' && subject_status === SUBJECT_STATUS.OPEN && !inclass) {
        return (
            <Button id='registerBt' onClick={handleClick}> Matrícular </Button>
        )
    } else if(user_t === '0') {
        return(
            <div style= {{ padding: '20px' }} >
                <Row>
                    <Label for="subjectStatus">Status da Disciplina</Label>
                    <Input type="select" name="status" value={subject_status} onChange={handleSelect} id="subjectStatus">
                        <option value='0'>Matrículas Abertas</option>
                        <option value='1'>Em Andamento</option>
                        <option value='2'>Finalizada</option>
                    </Input>
                </Row>
            </div>
        )
    } else {
        return <div></div>
    }
  }
}