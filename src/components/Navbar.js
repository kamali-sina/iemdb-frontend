import React from 'react';

function Navbar() {
    return (
        <header id="navbar">
            <nav className="navbar">
                {/* TODO: Add href */}
                <a className="home-link" href="">
                    <div className="logo-image">
                        <img
                                className="img-responsive img-rounded"
                                src={process.env.PUBLIC_URL + '/logo.png'}
                                alt="logo"
                        />
                    </div>
                </a>
                {/* TODO: Add href */}
                <a className="home-link" href="">
                    <div className="logo-image">
                        <i className="fa fa-user custome-user-icon"></i>
                    </div>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;