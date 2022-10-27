import React, { Component } from 'react';

import * as actions from "../../../../actions";
import { connect } from 'react-redux';
import Action from "../action";


class ScheduleCourse extends Component {
    render() {
        return (
            <div className='schedule-course'>
                <label className="schedule-course__label" >{this.props.title}</label>
                <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action" />
            </div>
        )
    }
}

export default connect(null, actions)(ScheduleCourse);