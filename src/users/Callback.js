import '../styles/localbootstrap.scss';
import React, { useState, useEffect } from 'react';
import IemdbLogo from './IemdbLogo';
import { useNavigate, useSearchParams } from "react-router-dom";

function CallbackPage({ notify }) {
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)
    const [doOnce, setDoOnce] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();

    async function doFetch(code) {
        setDoOnce(true);
        const response = await fetch('http://87.247.185.122:31921/callback/', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            body: JSON.stringify({ "code": code })
        });
        const data = await response.json();
        console.log('tokes: ' + data.status + ': ' + data.data);
        if (data.status == 200) {
            notify("login using github successful!!")
            setDoOnce(false);
            localStorage.setItem('token', data.data)
            navigate("/")
        } else {
            notify("login using github failed!!")
            setDoOnce(false);
            navigate("/login")
        }
    }

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
        if (!doOnce) {
            doFetch(auth_code)
        }
    }, [isUserLoggedIn])

    return (
        <div></div>
    );
}

export default CallbackPage;