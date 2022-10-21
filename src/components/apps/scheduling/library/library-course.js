import React, { Component } from 'react';

export default class LibraryCourse extends Component {
    render() {
        return (
            <div className='library-course'>
                <label className='library-course__title'></label>

                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere recusandae, consequatur temporibus officiis ipsa ad eos atque. Quaerat, officia?</p>
                </div>
            </div>
        )
    }
}