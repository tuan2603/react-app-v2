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
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Login} from "../components/logins";
import {Main} from "../components/mains";
import {Category} from "../components/categories";
import {PrivateRoutes} from "../components";
import {history} from "../helpers";
import { setupTimeOut} from '../utils';
import {Notification} from '../components/notification';

class App extends Component {
    componentWillMount() {
        setupTimeOut();
    }
    render() {
        const {  notification } = this.props;
        return (
            <Router history={history}>
                <div>
                    {( notification !== null) && <Notification />}
                    <PrivateRoutes exact path='/' component={Main}/>
                    <PrivateRoutes exact path='/page-categories.html' component={Category}/>
                    <Route exact path='/page-login.html' component={Login}/>
                </div>
            </Router>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        notification: state.notifyReducers
    };
};
const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};
