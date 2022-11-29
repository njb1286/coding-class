import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../form-title';
import { FormInput, FormButton } from '../form-field';
import TextLink from '../text-link';

class SignupForm extends Component {
    render() {
        return (
            <form className='sign-up-form'>
                <FormTitle className="sign-up-form__title" text="New User" />

                <Field 
                    className='sign-up-form__fullname' 
                    placeholder='Enter Your Full Name' 
                    title="Full Name"
                    name='fullname' 
                    type='text' 
                    component={FormInput} 
                />
                
                <Field 
                    className='sign-up-form__unit' 
                    placeholder='Enter Unit #' 
                    title="Unit #"
                    name='unit' 
                    type='text' 
                    component={FormInput} 
                />

                <Field 
                    placeholder='Enter Email' 
                    className='sign-up-form__email' 
                    title="Email"
                    name='email' 
                    type='email' 
                    component={FormInput} 
                />

                <Field 
                    placeholder='Enter Password' 
                    className='sign-up-form__password' 
                    name='password' 
                    type='password' 
                    title="Password"
                    component={FormInput} 
                />

                <Field 
                    className='sign-up-form__create-account' 
                    name='createaccount' 
                    type='submit' 
                    title="Create Account"
                    component={FormButton} 
                />

                <div className="text-links">
                    <TextLink to="/prop-management/signin" text='Already a member? Login' />
                </div>
            </form>
        )
    }
}

SignupForm = reduxForm({
    form: "signup"
})(SignupForm);

export default SignupForm;