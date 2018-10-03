import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export class CustomNavBar extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
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
                    <NavLink href="/components/">Nova Disciplina</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Sair</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => 
    bindActionCreators({  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)