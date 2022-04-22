import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <header id="navbar">
                <nav class="navbar">
                    {/* TODO: Add href */}
                    <a class="home-link" href="">
                        <div class="logo-image">
                            <img
                                    class="img-responsive img-rounded"
                                    src={process.env.PUBLIC_URL + '/logo.png'}
                                    alt="logo"
                            />
                        </div>
                    </a>
                    {/* TODO: Add href */}
                    <a class="home-link" href="">
                        <div class="logo-image">
                            <i class="fa fa-user custome-user-icon"></i>
                        </div>
                    </a>
                </nav>
            </header>
        );
    }
}

export default Navbar;