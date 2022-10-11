import React from 'react';

export default props => {
    return (
    // <input type="button" value={props.title} className='button' />
        <button className='button'>
            <div className='button__title'>{props.title}</div>
        </button>
    )
}