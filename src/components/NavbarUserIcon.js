import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavbarUserIcon({ notify }) {
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsUserLoggedIn(true)
    } else {
      setIsUserLoggedIn(false)
    }
  }, [isUserLoggedIn])

  async function handleLogout(event) {
    localStorage.setItem('token', null)
    localStorage.setItem('token', null)
    notify("logout Successul!");
    navigate("/login");
  }

  if (isUserLoggedIn === false) {
    return (
      <div className="dropdown-user">
        <div className="dropbtn-user">
          <i className="fa fa-user custome-user-icon"></i>
        </div>

        <div className="dropdown-content-user">
          <a href="/login" className="drop-down-black-text">
            ورود
          </a>
          <a href="/signup" className="drop-down-black-text">
            ثبت نام
          </a>
        </div>
      </div>
    );
  } else if (isUserLoggedIn === true) {
    return (
      <div className="dropdown-user">
        <div className="dropbtn-user">
          <i className="fa fa-user custome-user-icon"></i>
        </div>

        <div className="dropdown-content-user">
          <a href="/watchlist">واچ لیست</a>
          <button
            className="navbar-button"
            onClick={(event) => {
              handleLogout(event);
            }}
          >
            خروج
          </button>
        </div>
      </div>
    );
  }
}

export default NavbarUserIcon;
