import React, { Component } from 'react';
import { Link } from 'react-router';

class SiteName extends Component {
    render () {
        return (
            <div className="navbar-left">
                <Link to="/" className="navbar-brand" href="#">Sitename</Link>
            </div>

        );
    }
    
}

export default SiteName;