import React, { Component } from 'react';
import Library from './library/library';
import LibraryCourse from './library/library-course';
import Schedule from './schedule/schedule';

export default class Scheduling extends Component {
    render() {
        return (
            <div className='scheduling'>
                <Library />

                <div className="library-courses-wrapper">
                    <div className="library-courses">
                        <LibraryCourse />
                        <LibraryCourse />
                        <LibraryCourse />
                    </div>
                </div>
                <Schedule />
            </div>
        )
    }
}