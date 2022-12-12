import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './auth/signin';
import Signup from './auth/signup';
import Layout from './layout';

export default class PropManagement extends Component {
    render() {
        return (
            <div className='prop-management'>
                <BrowserRouter>
                    <Switch>

                        <Layout>
                            <Route exact path="/prop-management/" component={Signin} />
                            <Route path="/prop-management/signup" component={Signup} />
                            <Route path="/prop-management/signin" component={Signin} />
                        </Layout>

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}