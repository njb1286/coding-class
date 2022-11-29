import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class TextLink extends Component {
    render() {
        const {
            to,
            text
        } = this.props;

        return (
            <Link className='text-link' to={to}>
                {text}
            </Link>
        )
    }
}