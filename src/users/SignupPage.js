import '../styles/localbootstrap.scss';
import React, { useState, useEffect } from 'react';
import IemdbLogo from './IemdbLogo';
import { useNavigate } from "react-router-dom"; 

function SignupForm({notify}) {
    const navigate = useNavigate();
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
  
    function handleEmailChange (event) {    
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {    
        setPassword(event.target.value);
    }

    function handleBirthdateChange(event) {    
        setBirthdate(event.target.value);
    }

    function handleUsernamehange(event) {    
        setUsername(event.target.value);
    }

    function handleNameChange(event) {    
        setName(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!email || !password || !username || !name) {
            notify("Error: fields cannot be empty")
            return
        }
        const response = await fetch('http://127.0.0.1:8080/users/signup', { 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            method: 'POST', 
            mode: 'cors', 
            redirect: 'follow',
            body: JSON.stringify({ "email": email, 
                                   "password": password,
                                   "username": username,
                                   "birthdate": birthdate,
                                   "name": name
                                })       
        });
        const data = await response.json();
        console.log('A name was submitted: ' + data.status + ': ' + data.data);
        if (data.status == 200) {
            notify("signup Successul! Now try to login...")
            navigate("/login")
        } else {
            notify("username of email is already taken!")
            navigate("/signup")
        }
    }

    return (
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    value={name} onChange={handleNameChange}
                    />
                    <label className="form-label" for="form1Example13">Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="username"
                    name="username"
                    value={username} onChange={handleUsernamehange}
                    />
                    <label className="form-label" for="form1Example13">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    value={birthdate} onChange={handleBirthdateChange}
                    />
                    <label className="form-label" for="form1Example13">Birthdate</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    type="email"
                    value={email} onChange={handleEmailChange}
                    />
                    <label className="form-label" for="form1Example13">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="password"
                    name="password"
                    type="password"
                    value={password} onChange={handlePasswordChange}
                    />
                    <label className="form-label" for="form1Example23">Password</label>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Sign up
                </button>

                <div>
                    <a style={{marginTop : 10}} class="btn btn-block btn-warning" href="https://github.com/login/oauth/authorize?client_id=919a25257e88693e77ab&scope=user">
                        <span class="fa fa-github"></span> Sign in with Github
                    </a>
                </div>

                <div>
                    <a style={{marginTop : 10}} class="btn btn-block btn-warning" href="/login">
                        <span class="fa fa-user"></span> Already have an account? login.
                    </a>
                </div>
            </form>
        </div>
    );
}

function SignupPage({notify}) {
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
                            <SignupForm notify={notify} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;