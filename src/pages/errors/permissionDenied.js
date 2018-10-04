import React from 'react'
import { Jumbotron } from 'reactstrap'

const PermissionDenied = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Você não tem permissão para essa área</h1>
      </Jumbotron>
    </div>
  )
}

export default PermissionDenied