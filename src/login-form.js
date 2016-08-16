import React, { Component } from 'react';
import { Link } from 'react-router';
import SiteName from './site-name';





class LoginForm extends Component {
    handleSubmit(e) {
       e.preventDefault()
        let loginData = {}
        loginData.username = this.refs.usernameLogin.value
        loginData.password = this.refs.passwordLogin.value
        
        let jsonLogin = JSON.stringify(loginData, null, 2)
        console.log("Json data ",jsonLogin)
        
        if(loginData.username != "" && loginData.password != "") {
            $.ajax({
                type: 'POST',
                url: 'http://medlogotyp.se/register-cu/server/login.php',
                data: jsonLogin,
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                complete: function(data) {
                    if(data.status !== 200) {
                        console.log("Username or Password incorrect")
                    }else {
                        console.log("Logged in")
                    }
                }
            })
            
        }else {
            console.log("Please fill in all fields")
        }
    }
    render () {
        return(
           
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <SiteName />
                    <form className="navbar-form navbar-right" role="search"
                          onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                ref="usernameLogin" 
                                placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                ref="passwordLogin" 
                                placeholder="Password" />
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
