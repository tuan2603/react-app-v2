import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../assets/css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/cs-skin-elastic.css';
import '../assets/css/lib/vector-map/jqvmap.min.css';
import '../assets/scss/style.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import Routes from "../Routes";

class App extends Component {
       render() {
        return (
            <BrowserRouter>
                <main>
                    <Routes />
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
