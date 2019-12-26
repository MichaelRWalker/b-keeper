import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import React from "react";



function DropDownLink(props){
    const {href,name}=props;
    return<DropdownItem tag={'a'} href={href}>{name}</DropdownItem>
}

function BannerLink(props){
    const {items} = props.page;
    const {href,name} = items[0];
    return (
            <NavItem key={href}>
                <NavLink href={href}>
                    {name}
                </NavLink>
            </NavItem>
    )

}

 function BannerDropDown(props) {
    const {navName,header,items} = props.page;
    return (<UncontrolledDropdown nav inNavbar>
        <DropdownToggle>
            {navName}
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>{header}</DropdownItem>
            {items.map(item => <DropDownLink key={item.href} href={item.href} name={item.name}/>)}
        </DropdownMenu>
    </UncontrolledDropdown> )
}

export default function NavBannerItem(props){
    const {page}=props;
    return page.items.length === 1 ?
        <BannerLink page={page}/>
        :
        <BannerDropDown page={page}/>;
}