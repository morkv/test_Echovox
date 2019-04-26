import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Document extends Component {
    render() {
        const { name, desc } = this.props.document
        return (
            <li className="list-group-item bg-light">
                <a href="#">{name}</a>
                <p>{desc}</p>
            </li>
        )
    };
};

Document.propTypes = {
    document: PropTypes.object.isRequired
};

export default Document;
