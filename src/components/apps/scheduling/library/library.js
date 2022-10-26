import React, { Component } from 'react';
import { connect } from 'react-redux';
import LibraryCourse from './library-course';

import * as actions from "../../../../actions"

class Library extends Component {

    componentDidMount() {
        this.props.fetchCourses()
    }

    renderCourses() {
        const data = this.props.courses;

        return data.map((course, index) => {
            return <LibraryCourse {...course} key={index} />
        })
    }

    render() {
        return (
            <div className='library'>
                <h1 className='library__title'>Course Library</h1>
                { this.renderCourses() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps, actions)(Library); // Connect this class to the function called in actions