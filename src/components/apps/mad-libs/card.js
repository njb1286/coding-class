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
        this.handleGetState = this.handleGetState.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleGetState(key) {
        return this.state[key]
    }

    render() {
        return (
            <div className='card'>
                <h1>{this.state.color}</h1>
                {/* <Input label="Color" state="color" handleInputChange={this.handleInputChange} />
                <Input label="Plural Noun" state="pluralNoun" handleInputChange={this.handleInputChange} /> */}
                
                <Input label="Color" state="color" handleGetState={this.handleGetState} handleInputChange={this.handleInputChange} />
                <Input label="Plural Noun" state="pluralNoun" handleGetState={this.handleGetState} handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}