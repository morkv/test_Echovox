import React, { Component } from 'react';

class NoFoundAlert extends Component {

    render() {
        return (
            <li className="list-group-item bg-light" role="alert">
                <h5 className="alert alert-dark text-center mb-0">Enter correct <br/>document name</h5>
            </li>
        )
    }
};

export default NoFoundAlert;