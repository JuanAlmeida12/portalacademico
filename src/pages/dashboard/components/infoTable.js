import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import SubjectsContentTab from './subjectsContentTab'

import './infoTable.css'
export default class InfoTable extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        let { user } = this.props
        let tabText
        console.log('------------------');
        console.log(user)
        
        if ( user.utype === '0' ) {
          tabText = 'Disciplinas Ministradas'
        } else {
          tabText = 'Disciplinas Matriculadas'
        }
        this.state = {
          activeTab: '1',
          textTab: tabText
        }
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          })
        }
      }
      render() {
        const { textTab } = this.state
        return (
          <div className='table-box'>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink href='#'
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1') }}>
                  Disciplinas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2') }}
                >
                  Moar Tabs
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="table-content" tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>{ textTab }</h4>
                    <SubjectsContentTab />
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="table-content" tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            </div>
          </div>
        )
      }
    
}
