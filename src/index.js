import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './helpers';
import {App} from './containers';
import {loadCats} from './actions/catsActions';
import {loadPages} from './actions/pageActions';
import {loadUser} from './actions/userActions';

store.dispatch(loadUser());
store.dispatch(loadCats());
store.dispatch(loadPages());
// store.subscribe(() => console.log(store.getState()));
render((
        <Provider store={store}>

                <App/>

        </Provider>
    ),
    document.getElementById('root')
);
