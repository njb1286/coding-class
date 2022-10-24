import React, { Component } from 'react';

export default class ScheduleCourse extends Component {
    render() {
        return (
            <div className='library-course'>
                <label>{this.props.title}</label>
            </div>
        )
    }
}