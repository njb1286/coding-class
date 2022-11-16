import React, { Component } from 'react';
import HeaderBar from './header-bar';

export default class HeaderWrapper extends Component {
    render() {
        return [
            <div key="header" className='header-wrapper'>
                <h1 className='header-wrapper__title'>Welcome to HOA manager!</h1>
                <p className='header-wrapper__subtitle'>Please login to continue</p>
            </div>,
            <HeaderBar key="bar" />,
            this.props.children
        ]
    }
}