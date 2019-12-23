import React, { Component } from 'react'
import { Navbar, NavbarBrand,  NavItem, Nav, Collapse, NavbarToggler, NavLink } from 'reactstrap'
import { Link} from 'react-router-dom'

/*  

*/



export default class Banner extends Component {
    state={loggedIn:true,open:false}
    render() {
        return (
            <div>
                <Navbar expand='md' dark color='dark' >
                    <NavbarBrand href='/'>Bkeeper</NavbarBrand>
                    <NavbarToggler onClick={()=>this.setState({open:!this.state.open})}/>
                    <Collapse navbar isOpen={this.state.open}>        
                        <Nav className='mr-auto' navbar >
                        { this.state.loggedIn ? [
                            <NavItem><NavLink href='/'            >Home           </NavLink></NavItem>,
                            <NavItem><NavLink href='/roster'      >Roster         </NavLink></NavItem>,
                            <NavItem><NavLink href='/addband'     >Add Band       </NavLink></NavItem>,
                            <NavItem><NavLink href='/addproject'  >Add Project    </NavLink></NavItem>,
                            <NavItem><NavLink href='/payment'     >Add Payment    </NavLink></NavItem>,
                            <NavItem><NavLink href='/appointment' >Add Appointment</NavLink></NavItem>,
                            <NavItem><NavLink href='/ledger'      >Ledger         </NavLink></NavItem>,
                            <NavItem><NavLink href='/addsession'  >Add Session    </NavLink></NavItem>,
                        ]  :[
                            <NavItem><NavLink href='/register'    >Register       </NavLink></NavItem>,
                            <NavItem><NavLink href='/login'       >Login          </NavLink></NavItem>,
                            ]
                        }
                        </Nav>
                    </Collapse> 
                </Navbar>
            </div>
        )
    }
}
