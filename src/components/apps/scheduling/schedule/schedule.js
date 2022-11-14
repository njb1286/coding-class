import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gradient from '../gradient';
import ProgressTracker from './progress-tracker';
import ScheduleCourse from "./schedule-course";

class Schedule extends Component {
    renderCourses() {
        const data = this.props.courses;

        return data.map((course, index) => {
            if (course.enrolled && this.amountEnrolled <= 4) {
                this.amountEnrolled++;
                return <ScheduleCourse {...course} key={index} />;
            }
        })
    }

    render() {
        this.amountEnrolled = 0;

        return (
            <div className='schedule'>
                <div className="schedule__title-wrapper">
                    <h1 className='schedule__title'>My Schedule</h1>
                </div>
                <Gradient />
                <div className="schedule-items">

                    <div className="schedule-courses-wrapper">
                        { this.renderCourses() }
                    </div>

                    <ProgressTracker amountPossible={5} amountEnrolled={this.amountEnrolled} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Schedule);