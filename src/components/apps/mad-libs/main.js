import React, { Component } from 'react';

import Header from './header';
import Card from './card';

export default class MadLibs extends Component {
    render() {
        return (
            <div className='mad-libs'>
                <Header />

                <Card />
            </div>
        )
    }
}