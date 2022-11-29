import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../form-title';
import { FormInput, FormButton } from '../form-field';
import TextLink from '../text-link';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className="sign-in-form__title" text="Login" />
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

                <Field 
                    className='sign-in-form__login' 
                    name='login' 
                    type='submit' 
                    title="Login"
                    component={FormButton} 
                />

                <div className="text-links">
                    <TextLink to="/prop-management/forgot" text='Forgot Password' />
                    <TextLink to="/prop-management/signup" text='Not a member? Register here' />
                </div>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: "signin"
})(SigninForm);

export default SigninForm;