import React, { Component } from 'react';
import Navigation from './navigation';
import PageContent from './page-content';

export default class ComponentLifecycle extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <PageContent />
            </div>
        )
    }
}