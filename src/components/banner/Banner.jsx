import React, { Component } from 'react'
import { Navbar, NavbarBrand,  NavItem, Nav, Collapse, NavbarToggler, NavLink} from 'reactstrap'
import NavBannerItem from "./BannerDropdown";
import Pages from "./Pages";
import Button from "reactstrap/lib/Button";



export default class Banner extends Component {
    state={loggedIn:false,open:false};
    componentDidMount(){
        this.setState({
            loggedIn:this.props.isLoggedIn})

    }
    logout=()=>()=>{
        sessionStorage.clear();
        window.location ='/'
    };
    render() {
        return (
            <div>
                <Navbar expand='md' dark color='dark' className={'display-flex'} >
                    <NavbarBrand href='/'>
                        <small>Bkeeper</small>
                    </NavbarBrand>
                    <NavbarBrand>
                        {this.props.studioName}
                    </NavbarBrand>
                    <NavbarToggler  onClick={()=>this.setState({open:!this.state.open})}/>
                    <Collapse navbar isOpen={this.state.open}>        
                        <Nav className='mr-auto' navbar >
                        { this.state.loggedIn ?
                                Pages.map(page=><NavBannerItem className={'mr-1'} key={`${page.navName}`} page={page}/>)
                          :[
                            <NavItem key='/register'   ><NavLink href='/register'    >Register       </NavLink></NavItem>,
                            <NavItem key='/login'      ><NavLink href='/login'       >Login          </NavLink></NavItem>,
                            ]
                        }
                        </Nav>
                        {this.state.loggedIn && (
                            <Nav>
                            <NavItem>
                                <Button color={'danger'} onClick={this.logout()} >Log Out</Button>
                            </NavItem>
                        </Nav>
                        )}
                    </Collapse> 
                </Navbar>
            </div>
        )
    }
}
