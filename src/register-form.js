import React, { Component } from 'react';



class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: 'hyy',
            values: {values: []}
        };
    }

    handleSubmit(e) {
        e.preventDefault()
        var valuesInput = this.state.values
        console.log('click')
        let a = this.refs.inputUsername.value
        console.log(this.refs.inputEmail.value)
        console.log(this.refs.inputPassword.value)
        console.log(this.refs.inputRePassword.value)
        this.setState.valuesInput.concat([a]);




    }
    handleInputValue(e) {
        //this.setState({formInputs: e.target.value.substr(0,50)})
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
                                               value={this.state.inputValue}
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
