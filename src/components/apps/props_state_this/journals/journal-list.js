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

        this.clearEntries = this.clearEntries.bind(this);
        this.showAllEntries = this.showAllEntries.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
    }

    clearEntries() {
        this.setState({
            journalData: [],
            isOpen: false
        })
    }

    showAllEntries() {
        this.setState({
            journalData: rawJournalData,
            isOpen: true
        })
    }

    toggleStatus() {
        this.state.isOpen ? this.clearEntries() : this.showAllEntries();
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

                <input type="button" onClick={this.clearEntries} value="Clear journal entries" />
                <input type="button" onClick={this.showAllEntries} value="Show all entries" />
                <input type="button" onClick={this.toggleStatus} value="Toggle Entries" />
            </div>
        )
    }
}