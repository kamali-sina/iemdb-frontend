import '../styles/localbootstrap.scss';
import React, { useState, useEffect } from 'react';
import IemdbLogo from './IemdbLogo';
import { useNavigate, useSearchParams } from "react-router-dom"; 

function CallbackPage({notify}) {
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (localStorage.getItem('token') === 'null') {
            setIsUserLoggedIn(false)
        } else {
            notify("You can't view this page when logged in")
            navigate('/')
        }
        let auth_code = searchParams.get("code")
        if (auth_code == null) {
            notify("There was a problem!")
            navigate('/login')
        }
        console.log("code is: " + auth_code)
    }, [isUserLoggedIn])

    return (
        <div></div>
    );
}

export default CallbackPage;