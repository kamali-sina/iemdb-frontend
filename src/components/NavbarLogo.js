import React from "react";

function NavbarLogo() {
    return (
        <a href="" class="home-link">
            <div class="logo-image">
                <img
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    class="img-responsive img-rounded"
                    alt="logo"
                />
            </div>
        </a>
    );
}

export default NavbarLogo;