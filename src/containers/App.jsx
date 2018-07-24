import React, {Component} from 'react';
import {Router , Route} from 'react-router-dom';
import {connect} from 'react-redux';
import '../assets/css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/cs-skin-elastic.css';
import '../assets/css/lib/vector-map/jqvmap.min.css';
import '../assets/scss/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Login} from "../components/logins";
import {Main} from "../components/mains";
import {PrivateRoutes} from "../components";
import {history} from "../helpers";
import { setupTimeOut} from '../utils';
class App extends Component {
    componentWillMount() {
        setupTimeOut();
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <PrivateRoutes exact path='/' component={Main}/>
                    <Route path='/page-login.html' component={Login}/>
                </div>
            </Router>
        );
    }
}

const connectedApp = connect()(App);
export {connectedApp as App};
