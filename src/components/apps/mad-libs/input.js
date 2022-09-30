import React from 'react';

export default props => {
    return (
        <div>
            <label className='input__number'>{props.index + 1}</label>
            <input type="text" value={props.handleGetState(props.state)} name={props.state} onChange={e => props.handleInputChange(e)} />
            <label className='input__title'>{props.title}</label>
        </div>
    )
}