import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(content) {
        this.setState({
            content: content.target.value
        })
    }

    render() {
        return (
            <div className='input'>
                <label className={`input__number${this.state.content ? ' active' : ''}`}>{this.props.index + 1}</label>
                <input onInput={this.handleInput} type="text" value={this.props.handleGetState(this.props.state)} name={this.props.state} onChange={e => this.props.handleInputChange(e)} />
                <label className='input__title'>{this.props.title}</label>
            </div>
        )
    }
}