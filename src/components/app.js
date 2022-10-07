import React, { Component } from 'react';

import MadLibs from './apps/mad-libs/main';
import PropsStateThis from './apps/props_state_this/main';
// import TypeScript from './apps/typescript/main.ts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      apps: [
        {
          name: "Mad Libs",
          path: "mad-libs",
          component: <MadLibs />
        },

        // {
        //   name: "Type Script",
        //   path: "typescript",
        //   component: TypeScript()
        // },
        {
          name: "Props State This",
          path: 'props-state-this',
          component: <PropsStateThis />
        }
      ]
    }
  }

  render() {
    return (
      <Router>

        <Switch>

          {
            this.state.apps.map(app => (
              <Route key={this.state.apps.indexOf(app)} path={`/${app.path}`} render={() => app.component} />
            ))
          }

          <Route exact path="/" render={() => (
            <div className='homepage'>
              {this.state.apps.map(app => (
                <Link key={this.state.apps.indexOf(app)} to={app.path}>{app.name}</Link>
              ))}
            </div>
          )} />

        </Switch>

      </Router>
    );
  }
}
