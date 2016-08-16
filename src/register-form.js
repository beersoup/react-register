import React, { Component } from 'react'
import { EmptyInputWarning, PasswordWarning, UsernameExist, Congratulations }  from './warning-message'
import Loading from'./loading'
require('../assets/style.css')

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            emptyInputWarning: false,
            passwordWarning: false,
            usernameExist: false,
            confirmBox: false,
            loading: false
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
        
        if(signupData.username != "" && signupData.email != "" 
            && signupData.password != "" && signupData.rePassword != "") {
            this.setState({ emptyInputWarning : false })
            if (signupData.password === signupData.rePassword) {
                this.setState({ passwordWarning : false })
                $.ajax({
                    type: "POST",
                    url: 'http://medlogotyp.se/register-cu/server/sign-up.php',
                    data: json,
                    crossDomain: true,
                    contentType: "application/json; charset=utf-8",
                    complete: function (data) {
                        if (data.status !== 200) {
                            this.setState({ usernameExist : true })
                            this.setState({ congratulations : false })
                        } else {
                            this.setState({ usernameExist : false })
                            this.setState({ loading: true })
                            setTimeout(function(){
                                return this.setState({ confirmBox: true, loading: false })
                            }.bind(this), 3000)
                            //hashHistory.push('/success');
                        }

                    }.bind(this)
                });
            } else {
                this.setState({ passwordWarning : true })
            }
        } else {
            this.setState({ emptyInputWarning : true })
        }
    }
    
    render () {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default" style={{ marginTop:100 }}>
                        <div className="panel-body">
                            { this.state.confirmBox ? <Congratulations /> : null }
                            <h5 className="text-center">SIGN UP</h5>
                            { this.state.loading ? <Loading /> : null }
                            { this.state.emptyInputWarning ? <EmptyInputWarning /> : null }
                            { this.state.passwordWarning ? <PasswordWarning /> : null }
                            { this.state.usernameExist ? <UsernameExist /> : null }
                            
                            <form className="form form-signup" role="form"
                                  onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-user"></span>
                                        </span>
                                        <input
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
                                        <input
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
                                        <input
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
                                        <input
                                               ref="inputRePassword" 
                                               className="form-control" 
                                               placeholder="Confirm Password" />
                                    </div>
                                </div>
                                    <button className="btn btn-sm btn-primary btn-block" role="button">
                                        REGISTER NOW
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}

export default RegisterForm;
