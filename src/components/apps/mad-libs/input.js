import React from 'react';

export default props => {
    return (
        <div>
           <input type="text" />
           <label>{props.wordType}</label>
        </div>
    )
}