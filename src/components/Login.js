import React from 'react';
import {NavLink} from 'react-router-dom';


class Login extends React.Component {
    render() {
        return (
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="index.html">
                                <img className="align-content" src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="checkbox">
                                    <label className="pull-right">
                                        <NavLink to="/">Forgotten Password?</NavLink>
                                    </label>

                                </div>
                                <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
