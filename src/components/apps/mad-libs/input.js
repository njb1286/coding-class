import React from 'react';

export default props => {
    return (
        <div>
           <input type="text" value={props.handleGetState(props.state)} name={props.state} onChange={e => props.handleInputChange(e)} />
           <label>{props.label}</label>
        </div>
    )
}