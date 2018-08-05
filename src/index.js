import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './helpers';
import {App} from './containers';
import {loadCats} from './actions/catsActions';
store.dispatch(loadCats());

store.subscribe(()=>console.log(store.getState()));
render((
        <Provider store={store}>
            <App/>
        </Provider>
    ),
    document.getElementById('root')
);
