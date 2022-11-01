import React, { Component } from 'react';

import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

export default class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.handleAction = this.handleAction.bind(this);
    }

    handleAction() {
        this.props.onClick();

        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <a 
                onClick={this.handleAction} 
                className={`${this.props.className} action${this.state.active ? " action-remove" : ""}`}
            />
        )
    }
}