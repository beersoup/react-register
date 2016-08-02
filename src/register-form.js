import React, { Component } from 'react';



class RegisterForm extends Component {
    render () {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default" style={{ marginTop:100 }}>
                        <div className="panel-body">
                            <h5 className="text-center">SIGN UP</h5>
                            <form className="form form-signup" role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-user"></span>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-envelope"></span>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-lock"></span>
                                        </span>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-lock"></span>
                                        </span>
                                        <input type="password" className="form-control" placeholder="Re-password" />
                                    </div>
                                </div>
                                <a href="http://www.jquery2dotnet.com" className="btn btn-sm btn-primary btn-block" role="button">REGISTER NOW</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default RegisterForm;
