import React, { Component } from 'react';

export default class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: ""
        }
    }

    render() {
        return (
            <input 
               {...this.props}
            />
        )
    }
}