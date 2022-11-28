import React, { Component } from 'react';

export default class FormTitle extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.text}
            </div>
        )
    }
}