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
            startDate: new Date(),
            timeRemaining: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            age: 0
        }

        this.timer;

        this.handleGenerate = this.handleGenerate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.getBirthDate = this.getBirthDate.bind(this);
    }

    getBirthDate(date = new Date()) {
        let month = date.getMonth() + 1;  
        let day = date.getDate();  
        if (month < 10) month = "0" + month;
        return `${month}/${day}`
    }

    handleChange(startDate) {
        this.setState({
            startDate
        })
    }

    handleGenerate() {
        let bday = this.state.startDate;
        let today = new Date();
        let currentMonth = today.getMonth();
        let birthMonth = bday.getMonth();
        let timeBetween = today.getTime() - bday.getTime();
        let daysOld = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
        let age = Number((daysOld / 365).toFixed(0)) + 1;

        this.setState({ 
            age, 
            active: true
        });

        if (birthMonth > currentMonth) bday.setFullYear(today.getFullYear());
        else if (birthMonth < currentMonth) bday.setFullYear(today.getFullYear() + 1);
        else if (birthMonth === currentMonth) {
            let currentDay = today.getDate();
            let birthDay = bday.getDate();

            if (birthDay > currentDay) bday.setFullYear(today.getFullYear());
            else if (birthDay <= currentDay) bday.setFullYear(today.getFullYear() + 1);
        }

        // let countdownDate = new Date("Oct 25, 2022 15:37:25").getTime();
        let countdownDate = this.state.startDate.getTime();

        this.timer = setInterval(() => {
            let now = moment().toDate().getTime();

            let distance = countdownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const time = `${days} d ${hours} h ${minutes} m ${seconds} s`;
            
            this.setState({
                timeRemaining: {
                    days,
                    hours,
                    minutes,
                    seconds
                }
            })
            
            if (distance < 0) clearInterval(this.timer);
        }, 1000)
    }

    handleChangeDate() {
        this.setState({ active: false });
        clearInterval(this.timer);
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
                            <Clock key="clock" timeRemaining={this.state.timeRemaining} />,
                            <ChangeDate key="change-date" title="Change Date" callback={this.handleChangeDate} />,
                            <LargeText  key="large-text" text={this.getBirthDate(this.state.startDate)} />,
                            <label className='grid__remaining' key="time-remaining">Time remaining until you turn {this.state.age}</label>
                            
                        ] : [
                            <Button key="btn" title="Generate Countdown" callback={this.handleGenerate} />,
                            <Picker key="picker" startDate={this.state.startDate} callback={date => this.handleChange(date)} />
                        ]
                    }
                </div>
            </div>
        )
    }
}