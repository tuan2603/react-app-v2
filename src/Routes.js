import React from "react";
import {
   Route, Switch
} from "react-router-dom";

import Home from './components/views/Home';
import sufee from './components/views/sufee';
import Account from './components/views/Account';
import Transaction from './components/views/Transaction';
const Routes = () => (
    <Switch>
        <Route exact path='/' component={sufee}/>
        <Route exact path='/account' component={Account}/>
        <Route exact path='/transaction' component={Transaction}/>
        <Route render = { function() {
            return <h1>Not Found</h1>;
        }} />
    </Switch>
);


export default Routes;
