import React, { Component } from 'react';
import moment from 'moment/moment';

import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './change-date';
import LargeText from './large-text';

export default class BirthdayCountdown extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            active: false,
            startDate: new Date()
        }

        this.handleGenerate = this.handleGenerate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleGenerate() {
        this.setState({
            active: true
        })

        // let countdownDate = new Date("Oct 25, 2022 15:37:25").getTime();
        let countdownDate = this.state.startDate.getTime();

        const x = setInterval(() => {
            let now = new Date().getTime();

            let distance = countdownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const time = `${days} d ${hours} h ${minutes} m ${seconds} s`;
            console.log(time);

            // if (distance < 0) clearInterval(x);
        }, 1000)
    }

    render() {
        return (
            <div className='birthday-countdown'>
                <div className="grid">
                    <h1 className="grid__title">Birthday Countdown</h1>

                    <div className="grid__skew-dark-two"></div>
                    <div className="grid__skew-dark-three"></div>

                    <div className="grid__skew-light-one"></div>
                    <div className="grid__skew-light-two"></div>
                    <div className="grid__skew-light-three-box"></div>

                    {
                        this.state.active ? [
                            <Clock />,
                            <ChangeDate title="Change Date" callback={() => this.setState({ active: false })} />,
                            <LargeText text="04/03" />,
                        <label className='grid__remaining'>Remaining until your 21st birthday</label>
                            
                        ] : [
                            <Button title="Generate Countdown" callback={this.handleGenerate} />,
                            <Picker callback={date => this.handleChange(date)} />
                        ]
                    }
                </div>
            </div>
        )
    }
}