import React, { Component } from 'react';
import LoginForm from './login-form';


require('../assets/style.css')



export class App extends Component {
  render() {
    return (
        <div>
            <LoginForm />
            {this.props.children}
        </div>
    );
  }
}