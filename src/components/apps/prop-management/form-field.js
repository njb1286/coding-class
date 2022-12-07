import React, { Component } from 'react';

export class FormInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: ""
        }

        this.handleFormData = this.handleFormData.bind(this);
    }

    handleFormData(e) {
        this.setState({
            formData: e.target.value
        })

        this.props.onChange ? this.props.onChange(e) : null;
    }

    render() {
        const { className, title, placeholder, type, input } = this.props;

        return (
            <div className={`${className} form-input`}>
                <label className='form-input__title'>
                    <div className="form-input__title__text">{title}</div>
                </label>
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
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.properties);
    }

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
                    onClick={this.handleClick}
                    {...input}
                >
                    {title}
                </button>
            </div>
        )
    }
}