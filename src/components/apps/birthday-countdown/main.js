import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './change-date';
import LargeText from './large-text';

export default class BirthdayCountdown extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            active: false
        }

        this.callback = this.callback.bind(this);
    }

    callback() {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <div className='birthday-countdown'>
                <div className="grid">
                    <h1 className="grid__title">Birthday Countdown</h1>

                    <div className="grid__skew-dark-one-box"></div>
                    <div className="grid__skew-dark-two"></div>
                    <div className="grid__skew-dark-three"></div>

                    <div className="grid__skew-light-one"></div>
                    <div className="grid__skew-light-two"></div>
                    <div className="grid__skew-light-three-box"></div>

                    {
                        this.state.active ? [
                            <Clock />,
                            <ChangeDate title="Change Date" callback={this.callback} />,
                            <LargeText text="04/03" />,
                            <label className='grid__remaining'>Remaining until your 21st birthday</label>
                            
                        ] : [
                            <Button title="Generate Countdown" callback={this.callback} />,
                            <Picker />
                        ]
                    }
                </div>
            </div>
        )
    }
}