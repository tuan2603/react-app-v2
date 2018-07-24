import React from "react";
import {
   Route, Switch
} from "react-router-dom";

import Main from './components/Main';
import Login from './components/Login';
const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/index.html' component={Main}/>
        <Route exact path='/page-login.html' component={Login}/>
        <Route render = { function() {
            return <h1>Not Found</h1>;
        }} />
    </Switch>
);


export default Routes;
