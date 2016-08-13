import React, { Component } from 'react';


class PasswordWarning extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert" style={{ padding: 10 }}>
                Password and Confirm password do not match!
            </div>
        );
    }
}

export default PasswordWarning;
