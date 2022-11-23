import e from 'express';
import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title } = this.props;

        return (
            <div className='form-input'>
                <label className='form-input__title'>{title}</label>
                <input 
                    className={`${className} form-input__input`} 
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