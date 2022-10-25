import React, { Component } from 'react';

export default class ProgressTracker extends Component {
    render() {
        return (
            <div className='progress-tracker'>
                <label className='progress-tracker__label'></label>
                <div className="progress-tracker__percent">0%</div>
            </div>
        )
    }
}