import React from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarUserIcon from './NavbarUserIcon';

function Navbar() {
    return (
        <header id="navbar">
            <nav className="navbar">
                <NavbarLogo />

                <NavbarUserIcon />                
            </nav>
        </header>
    );
}

export default Navbar;