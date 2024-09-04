import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', { email, password, rememberMe });
    };

    return (
        <div className="container mt-5">
            <div className="form-container">
                <div className="card-header">
                    Please Sign In
                </div>
                <div className="card-body">
                    <form className="form" id="loginForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                id="loginEmail"
                                className="form-control"
                                placeholder="E-mail"
                                maxLength="50"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="loginPassword"
                                className="form-control"
                                placeholder="Password"
                                maxLength="50"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input form-group"
                                    type="checkbox"
                                    id="disabledFieldsetCheck"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button id="button" type="submit" className="form-control">
                                Login
                            </button>
                        </div>
                        <div className="form-group">
                            <a href="Register.html">Click here to Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginForm;
