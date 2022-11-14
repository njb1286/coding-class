import React, { Component } from 'react';

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
            active: this.props.active
        })
    }

    render() {
        return (
            <a 
                onClick={this.handleAction} 
                className={`${this.props.className} action`}
            />
        )
    }
}