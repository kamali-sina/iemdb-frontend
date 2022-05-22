import '../styles/localbootstrap.scss';
import React, { useState, useEffect } from 'react';
import IemdbLogo from './IemdbLogo';
import { useNavigate, useSearchParams } from "react-router-dom"; 

function CallbackPage({notify}) {
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();

    async function doFetch(code) {
        const response = await fetch('http://127.0.0.1:8080/callback/', { 
            headers: {'Content-Type': 'application/json', 
                      'Accept': 'application/json'},
            method: 'POST', 
            mode: 'cors', 
            redirect: 'follow',
            body: JSON.stringify({ "code": code })       
        });
        const data = await response.json();
        console.log('tokes: ' + data.status + ': ' + data.data);
        if (data.status == 200) {
            localStorage.setItem('token', data.data)
            navigate("/")
        } else {
            notify("login using github failed!!")
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
        doFetch(auth_code)
    }, [isUserLoggedIn])

    return (
        <div></div>
    );
}

export default CallbackPage;