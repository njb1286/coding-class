import React, { Component } from 'react';

export default class BirthdayCountdown extends Component {
    render() {
        return (
            <div className='birthday-countdown'>
                <div className="grid">
                    <div className="grid__skew-light-one"></div>
                    <div className="grid__skew-light-two"></div>
                    <div className="grid__skew-light-three-box"></div>
                </div>
            </div>
        )
    }
}