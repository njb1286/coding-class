import React, { Component } from 'react';

import Input from './input';

export default class Card extends Component {
    render() {
        return (
            <div className='card'>
                <Input wordType="Color" />
                <Input wordType="Plural Noun" />
            </div>
        )
    }
}