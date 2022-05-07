import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Nav} from "./Nav";
import {Home} from "./Home";
import Popular from "./Popular";

export const App = () => (
        <Router>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/popular' component={Popular} />
                    <Route exact path='/battle' render={() => <h3>battle</h3>} />
                    <Route render={() => <p>Not Found</p>} />
                </Switch>
            </div>
        </Router>
    )
