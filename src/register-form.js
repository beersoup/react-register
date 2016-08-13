import React, { Component } from 'react';



class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            lists: []
        }
    }


    handleSubmit(e) {
        e.preventDefault();

        let signupData = {};
        signupData.username = this.refs.inputUsername.value;
        signupData.email = this.refs.inputEmail.value;
        signupData.password = this.refs.inputPassword.value;

        console.log("Send this signup data ", signupData);
        let json = JSON.stringify(signupData, null, 2);
        console.log("POST this JSON data to server ", json);

        $.ajax({
            type: "POST",
            url: 'http://medlogotyp.se/register-cu/server/sign-up.php',
            data: json,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log("Register OK? ", data);
            }.bind(this),
            failure: function (errMsg) {
                console.log("Register failed! " + errMsg);
            }.bind(this)
        });
    }

    
    handleInputValue(e) {
        console.log(e.target.value)
        console.log(this)
    }
    render () {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default" style={{ marginTop:100 }}>
                        <div className="panel-body">
                            <h5 className="text-center">SIGN UP</h5>
                            {this.state.newValues}
                             <form className="form form-signup" role="form" method="POST"
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
