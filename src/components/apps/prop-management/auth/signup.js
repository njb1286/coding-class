import React, { Component } from 'react';
import SignupForm from './signup-form';

export default class Signup extends Component {
    onSubmit = fields => {
        console.log("Trying to submit", fields);
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm hello="Hello" onSubmit={this.onSubmit} />
            </div>
        )
    }
}