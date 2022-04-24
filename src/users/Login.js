// FIXME: Imports affect eachother!!!
// import '../styles/login.css';
import React from 'react';

function IemdbLogo() {
    return (
        <div className="col-md-8 col-lg-7 col-xl-6">
            <img
            alt="Phone image"
            className="img-fluid"
            src={process.env.PUBLIC_URL + '/logo.png'}
            />
        </div>
    );
}

function LoginForm() {
    // TODO: Add redirect after successful login!
    return (
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form action="http://127.0.0.1:8080/users/login" method="post">
                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    type="email"
                    />
                    <label className="form-label" for="form1Example13">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="password"
                    name="password"
                    type="password"
                    />
                    <label className="form-label" for="form1Example23">Password</label>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit">
                    Sign in
                </button>
            </form>
        </div>
    );
}

class LoginPage extends React.Component {
    render() {
        return (
            <div className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <IemdbLogo />
                        <LoginForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;