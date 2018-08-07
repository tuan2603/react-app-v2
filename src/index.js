import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,history} from './helpers';
import {App} from './containers';
import {loadCats} from './actions/catsActions';



store.dispatch(loadCats());
store.subscribe(() => console.log(store.getState()));
render((
        <Provider store={store}>
            <BrowserRouter history={history}>
                <App/>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);
