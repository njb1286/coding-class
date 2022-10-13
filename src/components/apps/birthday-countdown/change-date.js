import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default props => {
    return (
        <button className='change-date' onClick={props.callback}>
            <FaCalendarAlt />
            {props.title}
        </button>
    )
}