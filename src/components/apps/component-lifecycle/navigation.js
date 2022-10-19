import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    const page = "/component-deepdive";
    return (
        <div>
            <div>
                <NavLink exact to={`${page}/`}>
                    Discussion
                </NavLink>
            </div>

            <div>
                <NavLink to={`${page}/rules`}>
                    Rules
                </NavLink>
            </div>

            <div>
                <NavLink to={`${page}/workflow`}>
                    Workflow
                </NavLink>
            </div>
        </div>
    )
}