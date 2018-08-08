import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, Switch} from 'react-router-dom';
import '../assets/css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/cs-skin-elastic.css';
import '../assets/css/lib/vector-map/jqvmap.min.css';
import '../assets/scss/style.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {LayoutRoute, EmptyLayout, MainLayout,CatsLayout} from "../components/layout";
import {setupTimeOut} from '../utils';
import {Categories, CatPage, NewCatPage} from '../components/categories';
import {Pages,EditPage, NewPage } from '../components/pages';
import {Notification} from '../components/notification';
import {Login} from '../components/logins';
import {history} from "../helpers";


class App extends Component {
    componentWillMount() {
        setupTimeOut();
    }

    render() {
        const {notification} = this.props;

        return (
            <Router history={history}>
                <main>
                    {(notification !== null) && <Notification/>}

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
                            component={Categories}
                            />

                        <LayoutRoute
                            exact
                            layout={CatsLayout}
                            path='/page-categories.html/new'
                            component={NewCatPage}>
                        </LayoutRoute>

                        <LayoutRoute
                            exact
                            layout={CatsLayout}
                            path='/page-categories.html/:id'
                            component={CatPage}>
                        </LayoutRoute>

                        <LayoutRoute
                            exact
                            path='/trang.html'
                            layout={MainLayout}
                            component={Pages}/>

                        <LayoutRoute
                            exact
                            layout={MainLayout}
                            path='/trang.html/new'
                            component={NewPage}>
                        </LayoutRoute>

                        <LayoutRoute
                            exact
                            layout={MainLayout}
                            path='/trang.html/:id'
                            component={EditPage}>
                        </LayoutRoute>
                    </Switch>
                </main>
            </Router>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        notification: state.notifyReducers
    };
};
export default connect(mapStateToProps)(App);
