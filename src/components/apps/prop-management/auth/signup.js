import React, { Component } from 'react';
import SignupForm from './signup-form';

export default class Signup extends Component {
    onSubmit = fields => {
        
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}