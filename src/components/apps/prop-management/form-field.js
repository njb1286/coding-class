import e from 'express';
import React, { Component } from 'react';

export class FormInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: ""
        }

        this.handleFormData = this.handleFormData.bind(this);
    }

    handleFormData(text) {
        this.setState({
            formData: text.target.value
        })
    }

    render() {
        const { 
            className, 
            title, 
            input, 
            type, 
            placeholder 
        } = this.props;

        return (
            <div className={`${className} form-input`}>
                <label className='form-input__title'>{title}</label>
                <input 
                    className='form-input__input'
                    type={type}
                    {...input}
                    placeholder={placeholder}
                    onChange={this.handleFormData}
                    value={this.state.formData}
                />
            </div>
        )
    }
}

export class FormButton extends Component {
    // handleClick(action) {
    //     action.preventDefault();
    // }

    render() {
        const { 
            className, 
            title, 
            input, 
            type 
        } = this.props;

        return (
            <div className={`${className} form-button`}>
                <button 
                    className='form-button__button'
                    type={type}
                    {...input}
                    // onClick={this.handleClick}
                >
                    {title}
                </button>
            </div>
        )
    }
}