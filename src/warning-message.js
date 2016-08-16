import React, { Component } from 'react'
import { Link } from 'react-router'
require('../assets/style.css')



export class EmptyInputWarning extends Component {
    render () { 
        return (
            <div className="alert alert-danger" role="alert" style={{ padding: 8 }}>
                Please fill in all fields!
            </div>
        );
    }
}

export class PasswordWarning extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert" style={{ padding: 8 }}>
                Password and Confirm Password do not match!
            </div>
        );
    }
}

export class UsernameExist extends Component {
    render () {
        return (
            <div className="alert alert-danger" role="alert" style={{ padding: 8 }}>
                Username or Email has already used, please choose another!
            </div>
        );
    }
}

export class Congratulations extends Component {
    
    render () {
        return (
            <div id="blackBg">
                <div className="alert alert-success container" role="alert" id="confirmBox">
                    <h3 className="text-center">Well done...You successfully registered!
                        <Link to="login-form" className="alert-link" style={{ paddingLeft: 10 }}>Go to login</Link>
                    </h3>
                </div>
            </div>
        );
    }
}

export class EmptyLogin extends Component {
    render () {
        return (
            <div className="navbar-form navbar-left" style={{ color: 'red' }}>
                Please fill in all fields..!
            </div>
        );
    }
}
export class IncorrectLogin extends Component {
    render () {
        return (
            <div className="navbar-form navbar-left" style={{ color: 'red' }}>
                Username or Password incorrect..!
            </div>
        );
    }
}







