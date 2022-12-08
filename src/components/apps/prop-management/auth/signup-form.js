import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../form-title';
import { FormInput, FormButton } from '../form-field';
import TextLink from '../text-link';

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            unit: "",
            email: "",
            password: ""
        }

        this.handleChangeState = this.handleChangeState.bind(this);
    }

    handleChangeState(type, text) {
        this.setState({
            [type]: text
        })
    }

    handleSubmit = props => {
        this.props.onSubmit(props);
    }

    render() {

        const { handleSubmit } = this.props;
        // const onSubmit = this.props.onSubmit;

        return (
            <form onSubmit={e => e.preventDefault()} className='sign-up-form'>
                <FormTitle className="sign-up-form__title" text="New User" />

                <FormInput 
                    className='sign-up-form__fullname' 
                    placeholder='Enter Your Full Name' 
                    title="Full Name"
                    name='fullname' 
                    type='text'
                    onChange={e => this.handleChangeState('fullName', e.target.value)}
                />
                
                <FormInput 
                    className='sign-up-form__unit' 
                    placeholder='Enter Unit #' 
                    title="Unit #"
                    name='unit' 
                    type='text' 
                    onChange={e => this.handleChangeState('unit', e.target.value)}
                />

                <FormInput 
                    placeholder='Enter Email' 
                    className='sign-up-form__email' 
                    title="Email"
                    name='email' 
                    type='email' 
                    onChange={e => this.handleChangeState('email', e.target.value)}
                />

                <FormInput 
                    placeholder='Enter Password' 
                    className='sign-up-form__password' 
                    name='password' 
                    type='password' 
                    title="Password"
                    onChange={e => this.handleChangeState('password', e.target.value)}
                />

                <FormButton 
                    className='sign-up-form__create-account' 
                    name='createaccount' 
                    type='submit' 
                    title="Create Account"
                    properties={this.state}
                    onClick={this.handleSubmit}
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