import React from 'react';

import Discussion from './discussion';
import Rules from './rules';
import Workflow from './workflow';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => {
    const page = "component-deepdive";
    return (
        <div>
            <BrowserRouter>
            
                <Switch>
                    <Route exact path={`/${page}/`} render={() => <Discussion />} />
                    <Route path={`/${page}/rules`} render={() => <Rules />} />
                    <Route path={`/${page}/workflow`} render={() => <Workflow />} />
                </Switch>
            
            </BrowserRouter>
        </div>
    )
}