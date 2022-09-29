import React, { Component } from 'react';

import Input from './input';
import { parseCamelCase } from './helpers';
import Content from './content';

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
            adjectiveFive: "",
            contentVisible: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGetState = this.handleGetState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleGetState(key) {
        return this.state[key]
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Trying to submit");
        this.setState({
            contentVisible: !this.state.contentVisible // I should have thought of this a long time ago! Being able to set the value to not the current value! (Swapping)
        })
    }

    render() {

        const blackList = [
            "contentVisible"
        ]

        const inputData = Object.keys(this.state).filter(item => !blackList.includes(item)).map(item => {
            return {
                title: parseCamelCase(item),
                name: item
            }
        })

        return (
            <div className='card'>
                <form onSubmit={this.handleSubmit} className="card__inputs">
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
                    {/* <button type='subit'>{!this.state.contentVisible ? "Generate Mad lib" : "Clear Form"}</button> */}
                    <input type="submit" value={!this.state.contentVisible ? "Generate Mad Lib" : "Clear Form"} className={!this.state.contentVisible ? "generate-btn" : "clear-btn"} />
                    {
                        this.state.contentVisible ? <Content data={this.state} /> : null
                    }
                </form>

            </div>
        )
    }
}