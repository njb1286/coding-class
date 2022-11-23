import React, { Component } from 'react';
import { reduxForm, Field, reducer } from 'redux-form';
import FormTitle from '../form-title';
import { FormInput } from '../form-field';
import { combineReducers } from 'redux';
// import Field from '../field';

class SigninForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setEmail(email) {
        this.setState({ 
            email: email.target.value 
        })

        console.log("Email", email.target.value);
    }

    setPassword(password) {
        this.setState({ 
            password: password.target.value  
        })
    }


    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className="sign-in-form__title" text="login" />
                <Field 
                    placeholder='Enter Email' 
                    className='sign-in-form__email' 
                    title="Email"
                    name='email' 
                    type='email' 
                    component={FormInput} 
                />

                <Field 
                    placeholder='Enter Password' 
                    className='sign-in-form__password' 
                    name='password' 
                    type='password' 
                    title="Password"
                    component={FormInput} 
                />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: "signin"
})(SigninForm);

export default SigninForm;