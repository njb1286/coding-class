import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup-form';

import * as actions from "../../../../actions";

class Signup extends Component {
    onSubmit = fields => {
        this.props.signUp(fields, () => {
            console.log("Navigate to dashboard");
            this.props.history.push('/prop-management/dashboard');
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, actions)(Signup);