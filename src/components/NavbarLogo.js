import React from "react";

function NavbarLogo() {
    return (
        <a href="/" className="home-link">
            <div className="logo-image">
                <img
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    className="img-responsive img-rounded"
                    alt="logo"
                />
            </div>
        </a>
    );
}

export default NavbarLogo;