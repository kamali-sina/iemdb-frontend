import React from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarUserIcon from './NavbarUserIcon';
import '../styles/navbar.css';

function Navbar({notify}) {
    return (
        <header id="navbar">
            <nav className="navbar">
                <NavbarLogo />

                <NavbarUserIcon notify={notify} />                
            </nav>
        </header>
    );
}

export default Navbar;