import React, { Component } from 'react';

import Input from './input';

export default class Card extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            color: "",
            pluralNoun: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(key, val) {
        this.setState({ [key]: val })
    }

    render() {
        return (
            <div className='card'>
                <h1>{this.state.color}</h1>
                <Input label="Color" state="color" handleInputChange={this.handleInputChange} />
                <Input label="Plural Noun" state="pluralNoun" handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}