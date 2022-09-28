import React, { Component } from 'react';

import Input from './input';
import { removeCapital } from './helpers';

export default class Card extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            color: "",
            pluralNoun: "",
            adjectiveOne: "",
            celebrityOne: "",
            nounOne: "",
            adjectiveTwo: "",
            numberOne: "",
            numberTwo: "",
            nounTwo: "",
            adjectiveThree: "",
            celebrityTwo: "",
            celebrityThree: "",
            adjectiveFour: "",
            nounThree: "",
            celebrityFour: "",
            adjectiveFive: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGetState = this.handleGetState.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }

    handleGetState(key) {
        return this.state[key]
    }

    render() {

        const inputData = Object.keys(this.state).map(item => {
            return {
                title: removeCapital(item),
                name: item
            }
        })

        return (
            <div className='card'>
                <h1>{this.state.color}</h1>

                {
                    inputData.map(item => (
                        <Input
                            key={item.name} 
                            title={item.title} 
                            state={item.name} 
                            handleGetState={this.handleGetState} 
                            handleInputChange={this.handleInputChange} 
                        />
                    ))
                }
            </div>
        )
    }
}