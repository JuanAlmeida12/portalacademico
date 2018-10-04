import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { logout } from '../pages/auth/authActions'

export class CustomNavBar extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logoutFunc = this.logoutFunc.bind(this)
    this.state = {
      collapsed: true
    }
  }

  logoutFunc = event => {
    event.preventDefault()
    console.log('logout')
    this.props.dispatch(logout())
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light>
            <NavbarBrand href="/dashboard" className="mr-auto">Portal Acadêmico</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="#" onClick={() => browserHistory.push('/')} >Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" onClick={() => browserHistory.push('/subject/register')} >Nova Disciplina</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href='#' onClick={this.logoutFunc}>Sair</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(CustomNavBar)