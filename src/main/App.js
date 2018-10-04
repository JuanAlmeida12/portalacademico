import React, { Component } from 'react';
import CustomNavBar from '../shared/navbar'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <CustomNavBar />
        <div className="row" style={{ backgroundColor:'white', marginTop: '30px', marginLeft: '2px', marginRight: '2px', padding: '20px' }}>
            {this.props.children}
        </div>
      </div>
    );
  }
}
