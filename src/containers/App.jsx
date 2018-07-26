import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter , Switch} from 'react-router-dom';
import '../assets/css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/cs-skin-elastic.css';
import '../assets/css/lib/vector-map/jqvmap.min.css';
import '../assets/scss/style.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {LayoutRoute, EmptyLayout, MainLayout} from "../components/layout";
import {setupTimeOut} from '../utils';
import {Categories} from '../components/categories';
import {Notification} from '../components/notification';
import {Login} from '../components/logins';


class App extends Component {
    componentWillMount() {
        setupTimeOut();
    }
    render() {
        const {  notification } = this.props;
        return (
            <BrowserRouter >
            <main>
                {( notification !== null) && <Notification />}
                <Switch>
                    <LayoutRoute
                        exact
                        path='/page-login.html'
                        layout={EmptyLayout}
                        component={Login}/>
                    <LayoutRoute
                        exact
                        path='/'
                        layout={MainLayout}
                        component={Categories}/>
                    <LayoutRoute
                        exact
                        path='/page-categories.html'
                        layout={MainLayout}
                        component={Categories}/>
                </Switch>
            </main>
            </BrowserRouter>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        notification: state.notifyReducers
    };
};
export default connect(mapStateToProps)(App);
