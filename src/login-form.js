import React, { Component } from 'react';
import { Link } from 'react-router';
import SiteName from './site-name';




class LoginForm extends Component {
    render () {
        return(
           
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <SiteName />
                    <form className="navbar-form navbar-right" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                        <Link to="register-form">
                            <button className="btn btn-default">Register</button>
                        </Link>
                    </form>
                </div>
            </div>
               
        );
    }

}


export default LoginForm;
