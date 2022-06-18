import '../styles/localbootstrap.scss';
import React, { useState, useEffect } from 'react';
import IemdbLogo from './IemdbLogo';
import { useNavigate } from "react-router-dom";


function LoginForm({ notify }) {
    const navigate = useNavigate();
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!email || !password) {
            notify("Error: fields cannot be empty")
            return
        }
        const response = await fetch('http://87.247.185.122:31921/users/login', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            body: JSON.stringify({ "email": email, "password": password })
        });
        const data = await response.json();
        console.log('A name was submitted: ' + data.status + ': ' + data.data);
        if (data.status == 200) {
            localStorage.setItem('token', data.data)
            navigate("/")
        } else {
            notify("Wrong username or password!")
            navigate("/login")
        }
    }

    return (
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        type="email"
                        value={email} onChange={handleEmailChange}
                    />
                    <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        type="password"
                        value={password} onChange={handlePasswordChange}
                    />
                    <label className="form-label">Password</label>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Sign in
                </button>

                <div>
                    <a style={{ marginTop: 10 }} class="btn btn-block btn-warning" href="https://github.com/login/oauth/authorize?client_id=919a25257e88693e77ab&scope=user">
                        <span class="fa fa-github"></span> Sign in with Github
                    </a>
                </div>

                <div>
                    <a style={{ marginTop: 10 }} class="btn btn-block btn-warning" href="/signup">
                        <span class="fa fa-user"></span> Don't have an account? signup.
                    </a>
                </div>

            </form>
        </div>
    );
}

function LoginPage({ notify }) {
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('token') === 'null') {
            setIsUserLoggedIn(false)
        } else {
            notify("You can't view this page when logged in")
            navigate('/')
        }
    }, [isUserLoggedIn])

    if (isUserLoggedIn === false) {
        return (
            <div className='local-bootstrap'>
                <div className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <IemdbLogo />
                            <LoginForm notify={notify} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;