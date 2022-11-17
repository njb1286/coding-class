import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormTitle from '../form-title';
import { FormInput } from '../form-field';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className="sign-in-form__title" text="login" />
                <Field className='sing-in-form__email' component={FormInput} name='email' type='email' />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: "signin"
})(SigninForm);

export default SigninForm;