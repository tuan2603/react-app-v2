import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../helpers';
import { getFromSession } from '../utils';
import { TOKEN } from '../constants/Users';

export const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        (props) => {
            console.log(store.getState());
          return  (
                getFromSession(TOKEN) === null ?
                    <Redirect to={'/page-login.html'}/>
                    : <Component {...props} />
            )
        }
    }

    />
)
