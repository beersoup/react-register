import React from 'react';
import { render } from 'react-dom';
import  { App }  from './App';
import HomeBody from './home-body';
import RegisterForm from './register-form';
import LoginForm from './login-form'



import { Router, Route, IndexRoute, hashHistory } from 'react-router';


render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomeBody}></IndexRoute>
            <Route path="register-form" component={RegisterForm}></Route>
            <Route path="login-form" component={LoginForm}></Route>
            
        </Route>
    </Router>,
    document.getElementById('root'));
