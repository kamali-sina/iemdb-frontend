import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; 

function NavbarUserIcon({notify}) {
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)

    useEffect(() => {
        const doFetch = async () => {
            const response = await fetch('http://127.0.0.1:8080/users/loggedInUser');
            const data = await response.json();
            console.log(data);
            if (data.data === null) {
                setIsUserLoggedIn(false);
            } else {
                setIsUserLoggedIn(true);
            }
        }
        doFetch();
    }, [isUserLoggedIn])

    async function handleLogout(event) {
        event.preventDefault();
        const response = await fetch('http://127.0.0.1:8080/users/logout', { 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            method: 'POST', 
            mode: 'cors',      
        });
        const data = await response.json();
        if (data.status == 200) {
            notify("logout Successul!")
            navigate("/login")
        } else {
            notify("An error happened when loggin out!")
        }
    }

    if (isUserLoggedIn === false) {
        return (
            <div className="dropdown-user">
                <div className="dropbtn-user">
                    <i className="fa fa-user custome-user-icon"></i>
                </div>

                <div className="dropdown-content-user">
                    <a href="/login">ثبت نام</a>
                    <a href="/signup">ورود</a>
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
                    <button onClick={(event) => {handleLogout(event)}} >خروج</button>
                </div>
            </div>
        );
    }
}

export default NavbarUserIcon;