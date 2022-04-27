import React from "react";

function NavbarUserIcon() {
    return (
        <div class="dropdown-user">
            <div class="dropbtn-user">
                <i class="fa fa-user custome-user-icon"></i>
            </div>

            <div class="dropdown-content-user">
                <a href="/login">ثبت نام</a>
                <a href="/signup">ورود</a>
            </div>
        </div>
    );
}

export default NavbarUserIcon;