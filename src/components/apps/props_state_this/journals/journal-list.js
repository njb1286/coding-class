import React, { Component } from 'react';

import JournalEntry from './journal-entry';

const rawJournalData = [
    { title: "Post One", content: "Post Content", status: "draft" },
    { title: "Post Two", content: "Post Content", status: "published" },
    { title: "Post Three", content: "Post Content", status: "published" },
    { title: "Post Four", content: "Post Content", status: "published" },
]



export default class JournalList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            journalData: rawJournalData,
            isOpen: true
        }
    }

    render() {

        const journalEntries = this.state.journalData.map(e => (
            <div key={e.title}>
                <JournalEntry title={e.title} content={e.content} />
            </div>
        ))

        return (
            <div>
                <h2>{this.props.heading}</h2>
                {journalEntries}
            </div>
        )
    }
}