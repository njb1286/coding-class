import React, { Component } from 'react';
import JournalList from "./journals/journal-list";

export default class PropsStateThis extends Component {
    render() {
        return (
            <div className='props-state-this'>
                <h1>React Props and State Deep Dive</h1>
                <JournalList heading="List 1" />
                <JournalList heading="List 2" />
            </div>
        )
    }
}