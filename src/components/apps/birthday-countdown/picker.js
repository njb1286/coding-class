import React, { Component } from 'react';
import moment from 'moment/moment';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class Picker extends Component {
    handleChange = function(date) {
        this.props.callback(date)
    }.bind(this)

    render() {
        return (
            <div className='picker'>
                <DatePicker 
                   selected={this.props.startDate} 
                   onChange={this.handleChange}
                />
            </div>
        )
    }
}