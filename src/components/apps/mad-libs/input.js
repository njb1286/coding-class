import React from 'react';

export default props => {
    return (
        <div>
           <input type="text" onInput={e => props.handleInputChange(props.state, e.target.value)} />
           <label>{props.label}</label>
        </div>
    )
}