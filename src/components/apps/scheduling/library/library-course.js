import React, { Component } from 'react';
import * as actions from "../../../../actions";
import { connect } from 'react-redux';

import { FaCheck } from 'react-icons/fa';
import Action from '../action';
import Arrow from '../arrow';


class LibraryCourse extends Component {
    render() {
        return (
            <div className='library-course'>
                <div className="library-course__header">
                    <div className="library-course__title-check">
                        <label className='library-course__title'>{this.props.title}</label>
                        <FaCheck className='library-course__icon' />
                    </div>

                    <div className="library-course__arrow-action">
                        <Arrow className='library-course__arrow' />
                        <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action" />
                    </div>
                </div>

                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(LibraryCourse)