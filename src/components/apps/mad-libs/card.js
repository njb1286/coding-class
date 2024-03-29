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

        this.blackList = [
            "contentVisible"
        ]

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
        
        if (this.state.contentVisible) {
            Object.keys(this.state).filter(item => !this.blackList.includes(item)).forEach(item => this.setState({
                [item]: ""
            }))
        }

        this.setState({
            contentVisible: !this.state.contentVisible // I should have thought of this a long time ago! Being able to set the value to not the current value! (Swapping)
        })

    }

    render() {

        const inputData = Object.keys(this.state).filter(item => !this.blackList.includes(item)).map(item => {
            return {
                title: parseCamelCase(item),
                name: item
            }
        })

        return (
            <div className='card'>
                <form onSubmit={this.handleSubmit} className="card__inputs">
                    <div className="user-inputs">
                        <div className="inputs-wrapper">
                            {
                                inputData.map((item, index) => (
                                    <Input
                                        key={index}
                                        title={item.title} 
                                        state={item.name} 
                                        handleGetState={this.handleGetState} 
                                        handleInputChange={this.handleInputChange} 
                                        index={index}
                                    />
                                ))
                            }
                        </div>


                        <div className="btn-wrapper">
                            <input 
                                type="submit" 
                                value={!this.state.contentVisible ? "Generate Mad Lib" : "Clear Form"} 
                                className={`card__${!this.state.contentVisible ? 'generate' : 'clear'} card__btn`} 
                            />
                        </div>
                        
                        <Content data={this.state} style={{
                            opacity: this.state.contentVisible ? "100%" : "0%"
                        }} />
                    </div>


                    {/* {
                        this.state.contentVisible ? <Content data={this.state} /> : null
                    } */}
                </form>

            </div>
        )
    }
}