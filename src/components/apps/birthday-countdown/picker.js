import React, { Component } from 'react';
import moment from 'moment/moment';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class Picker extends Component {
    constructor() {
        super();

        this.state = {
            startDate: moment()._d
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        this.props.callback(date)
    }

    render() {
        return (
            <div className='picker'>
                <DatePicker 
                   selected={this.state.startDate} 
                   onChange={this.handleChange}
                />
            </div>
        )
    }
}