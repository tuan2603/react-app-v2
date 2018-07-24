import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getFromSession } from '../utils';
import { TOKEN } from '../constants/Users';

export const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getFromSession(TOKEN) === null ? <Redirect to={{ pathname: '/page-login.html', state: { from: props.location } }} />
          :   <Component {...props} />
    )} />
)