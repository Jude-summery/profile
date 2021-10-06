import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';

export default function LocalRouter() {
    return (
        <Router>
            <Switch>
                <Router exact path="/">
                    <Home />
                </Router>
            </Switch>
        </Router>
    )
}