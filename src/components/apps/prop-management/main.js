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
                            <Route exact path="/prop-management/" render={() => <Signin />} />
                            <Route path="/prop-management/signup" render={() => <Signup />} />
                            <Route path="/prop-management/siginin" render={() => <Signup />} />
                        </Layout>

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}