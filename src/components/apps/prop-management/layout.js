import React, { Component } from 'react';
// import HeaderBar from './header-bar';
// import Header from './header';
import { Header, HeaderBar } from './header';

export default class Layout extends Component {
    render() {
        return (
            <div className='layout-grid'>
                <Header />
                <HeaderBar key="bar" />
                {this.props.children}
            </div>
        )
    }
}