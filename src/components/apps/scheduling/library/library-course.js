import React, { Component } from 'react';
import * as actions from "../../../../actions";
import { connect } from 'react-redux';

import { FaCheck } from 'react-icons/fa';
import Action from '../action';
import Arrow from '../arrow';


class LibraryCourse extends Component {
    constructor() {
        super();

        this.state = {
            arrow: true
        }

        this.handleArrow = this.handleArrow.bind(this);
    }

    handleArrow(arrow) {
        this.setState({ arrow })
    }

    render() {
        return (
            <div className={`library-course${!this.state.arrow ? " hidden" : ""}`}>
                <div className="library-course__header">
                    <div className="library-course__title-check">
                        <label className='library-course__title'>{this.props.title}</label>
                        <FaCheck className='library-course__icon' />
                    </div>

                    <div className="library-course__arrow-action">
                        <Arrow handleArrow={this.handleArrow} className='library-course__arrow' />
                        <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action" />
                    </div>
                </div>

                {
                    this.state.arrow ? (
                        <div className="desc-line">
                            <div className='library-course__line' />
                            <div className="library-course__description">
                                <label>Course Description</label>
                                <p>
                                    {this.props.description}
                                </p>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

export default connect(null, actions)(LibraryCourse)