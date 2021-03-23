import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
            </Nav>  
            <NavIcon onChange={toggle}>
                 <p>Menu</p>
                 <Bars/>
            </NavIcon>
        </>
    )
}

export default Navbar;
