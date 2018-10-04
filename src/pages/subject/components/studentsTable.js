import React from 'react'
import ReactTable from 'react-table'
import "react-table/react-table.css";

export default class TableStudents extends React.Component {
    constructor(props) {
        super(props)
        const students = this.props.students
        this.mutateDatabackAndSave = this.mutateDatabackAndSave.bind(this)
        let formatedData = []
        for (let i in students) {
            formatedData.push(students[i])
        }

        this.state = {
            data: formatedData
        }
    }

    mutateDatabackAndSave = () => {
        const { data } = this.state
        let newDate = { }
        for(let i in data) {
            newDate[i.uid] = data[i]
        }
        this.props.pushStudents(newDate)
    }

    renderEditable = cellInfo => {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable={this.props.editable}
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.data]
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
              this.setState({ data })
              this.mutateDatabackAndSave()
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.data[cellInfo.index][cellInfo.column.id]
            }}
          />
        )
      }
      
    render() {

        const { data } = this.state
        
        const columns = [{
            Header: 'Nome',
            accessor: 'name',
            Cell: this.renderEditable
        },{
            Header: 'Nota 1',
            accessor: 'score1',
            Cell: this.renderEditable
        },{
            Header: 'Nota 2',
            accessor: 'score2',
            Cell: this.renderEditable
        },{
            Header: 'Nota 3',
            accessor: 'score3',
            Cell: this.renderEditable
        },{
            Header: 'Média',
            id:'mean',
            accessor: d => ((parseInt(d.score1) + parseInt(d.score2) + parseInt(d.score3))/3).toFixed(2)
        }]
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
            />
          </div>
          )
    }
}