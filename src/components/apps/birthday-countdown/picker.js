import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default class Picker extends Component {
    constructor() {
        super();

        this.state = {
            startDate: moment()._d
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log("Trying to change date for", date);
        this.setState({
            startDate: date
        })
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