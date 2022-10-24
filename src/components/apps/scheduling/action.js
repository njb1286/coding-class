import React, { Component } from 'react';

import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

export default class Action extends Component {
    render() {
        return (
            <div className={`${this.props.className} action`}>
                <FaPlusCircle />
            </div>
        )
    }
}