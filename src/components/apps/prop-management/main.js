import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './auth/signin';
import Signup from './auth/signup';
import HeaderWrapper from './header-wrapper';

export default class PropManagement extends Component {
    render() {
        return (
            <div className='prop-management'>
                <BrowserRouter>
                    <Switch>

                        <HeaderWrapper>
                            <Route path="/prop-management/signup" render={() => <Signup />} />
                            <Route exact path="/prop-management/" render={() => <Signin />} />
                        </HeaderWrapper>

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}