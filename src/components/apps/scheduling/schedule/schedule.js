import React, { Component } from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './schedule-course';

export default class Schedule extends Component {
    render() {
        return (
            <div className='schedule'>
                <h1 className='schedule__title'>My Schedule</h1>
                <ScheduleCourse title="Problem Solving" />
                <ScheduleCourse title="Problem Solving" />
                <ScheduleCourse title="Problem Solving" />
                <Gradient />
            </div>
        )
    }
}