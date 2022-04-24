// FIXME: Imports affect eachother!!!
import '../styles/localbootstrap.scss';
import React from 'react';
import IemdbLogo from './IemdbLogo';

function SignupForm() {
    // TODO: Add redirect after successful login!
    return (
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form action="http://127.0.0.1:8080/users/signup" method="post">
                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    />
                    <label className="form-label" for="form1Example13">Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="username"
                    name="username"
                    />
                    <label className="form-label" for="form1Example13">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                    className="form-control form-control-lg"
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    />
                    <label className="form-label" for="form1Example13">Birthdate</label>
                </div>

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

class SignupPage extends React.Component {
    render() {
        return (
            <div className='local-bootstrap'>
                <div className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <IemdbLogo />
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupPage;