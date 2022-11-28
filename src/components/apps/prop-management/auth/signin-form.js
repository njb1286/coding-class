import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormTitle from '../form-title';
import { FormInput } from '../form-field';
// import Field from '../field';

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
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: "signin"
})(SigninForm);

export default SigninForm;