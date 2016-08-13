import React, { Component } from 'react';
import PasswordWarning from './password-warning';



class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            passwordWarning: false
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        
        let signupData = {};
        signupData.username = this.refs.inputUsername.value;
        signupData.email = this.refs.inputEmail.value;
        signupData.password = this.refs.inputPassword.value;
        signupData.rePassword = this.refs.inputRePassword.value;
            
         
        
            console.log("Send this signup data ", signupData);
            let json = JSON.stringify(signupData, null, 2);
            console.log("POST this JSON data to server ", json);

        if(signupData.password === signupData.rePassword) {
            $.ajax({
                type: "POST",
                url: 'http://medlogotyp.se/register-cu/server/sign-up.php',
                data: json,
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                complete: function (data) {
                    if(data.status === 400) {
                        console.log("400 Bad Request: Please fill in all fields")
                    }else if(data.status === 409) {
                        console.log("409 Conflict: Username or Email has already in data base")
                    }else {
                        console.log("200 OK ", data)
                    }
    
                }.bind(this)
            });
        }else {
            console.log("Password and Confirm password do not match!")
        }
    }

    
    handleInputValue(e) {
        console.log(e.target.value)
        //console.log("Password ", this.refs.inputPassword.value)
        //console.log("rePassword ", this.refs.inputRePassword.value)
        //console.log(this)
      /*  let password = this.refs.inputPassword.value
        let rePassword = this.refs.inputRePassword.value
        

        if(password !== rePassword) {
            this.setState({ passwordWarning : true })
        }else {
            this.setState({ passwordWarning : false })
        } */
    }
    render () {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default" style={{ marginTop:100 }}>
                        <div className="panel-body">
                            <h5 className="text-center">SIGN UP</h5>
                            { this.state.passwordWarning ? <PasswordWarning /> : null }
                            <form className="form form-signup" role="form"
                                  onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-user"></span>
                                        </span>
                                        <input onChange={this.handleInputValue.bind(this)}
                                               type="text"
                                               ref="inputUsername"
                                               className="form-control" 
                                               placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-envelope"></span>
                                        </span>
                                        <input onChange={this.handleInputValue.bind(this)}
                                               ref="inputEmail"
                                               className="form-control" 
                                               placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-lock"></span>
                                        </span>
                                        <input onChange={this.handleInputValue.bind(this)}
                                               ref="inputPassword" 
                                               className="form-control" 
                                               placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-lock"></span>
                                        </span>
                                        <input onChange={this.handleInputValue.bind(this)}
                                               ref="inputRePassword" 
                                               className="form-control" 
                                               placeholder="Re-password" />
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-primary btn-block" role="button">REGISTER NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default RegisterForm;
