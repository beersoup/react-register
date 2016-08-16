import React, { Component } from 'react';
import { Link } from 'react-router';
import SiteName from './site-name';
import { EmptyLogin } from './warning-message'
import { IncorrectLogin } from './warning-message'

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            emptyLogin: false,
            incorrectLogin: false
        }
    }
    handleSubmit(e) {
       e.preventDefault()
        let loginData = {}
        loginData.username = this.refs.usernameLogin.value
        loginData.password = this.refs.passwordLogin.value
        
        let jsonLogin = JSON.stringify(loginData, null, 2)
        
        if(loginData.username != "" && loginData.password != "") {
            this.setState({ emptyLogin: false })
            $.ajax({
                type: 'POST',
                url: 'http://medlogotyp.se/register-cu/server/login.php',
                data: jsonLogin,
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                complete: function(data) {
                    if(data.status !== 200) {
                        this.setState({ incorrectLogin: true })
                    }else {
                        this.setState({ incorrectLogin: false })
                        console.log("Logged in")
                    }
                }.bind(this)
            })
        }else {
            this.setState({ emptyLogin: true, incorrectLogin: false })
        }
    }
    
    clickRegisterHandle() {
        this.refs.usernameLogin.value = ""
        this.refs.passwordLogin.value = ""
        this.setState({ emptyLogin: false, incorrectLogin: false })
    }
    render () {
        return(
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <SiteName />
                    <form className="navbar-form navbar-right" role="search"
                          onSubmit={this.handleSubmit.bind(this)}>
                        {this.state.emptyLogin ? <EmptyLogin /> : null}
                        {this.state.incorrectLogin ? <IncorrectLogin /> : null}
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
                            <button className="btn btn-default" 
                                    onClick={this.clickRegisterHandle.bind(this)}>Register</button>
                        </Link>
                    </form>
                </div>
            </div>
               
        );
    }
}
export default LoginForm;
