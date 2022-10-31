import React, { Component } from 'react';

export default class Arrow extends Component {
    constructor() {
        super();

        this.state = {
            status: true
        }

        this.handleToggleArrow = this.handleToggleArrow.bind(this);
    }

    handleToggleArrow() {
        this.setState({
            status: !this.state.status
        })
    }

    render() {
        return (
            <a 
                onClick={this.handleToggleArrow} 
                className={`${this.props.className} arrow${!this.state.status ? " arrow-closed" : ""}`}
            />
        )
    }
}