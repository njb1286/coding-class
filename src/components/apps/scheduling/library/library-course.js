import React, { Component } from 'react';

import { FaCheck } from 'react-icons/fa';
import Action from '../action';
import Arrow from '../arrow';

export default class LibraryCourse extends Component {
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
                        <Action className="library-course__action" />
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