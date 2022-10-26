import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gradient from '../gradient';
import ProgressTracker from './progress-tracker';
import ScheduleCourse from "./schedule-course";
import LibraryCourse from "../library/library-course";

class Schedule extends Component {

    renderCourses() {
        const data = this.props.courses;

        return data.map((course, index) => {
            if (course.enrolled) return <ScheduleCourse {...course} key={index} />
        })
    }

    render() {
        return (
            <div className='schedule'>
                <h1 className='schedule__title'>My Schedule</h1>
                {this.renderCourses()}
                {/* <Library /> */}
                <Gradient />
                <ProgressTracker />
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