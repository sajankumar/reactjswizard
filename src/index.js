import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import wizardApp from './reducers';

import Layout from './components/Layout.component';
import 'bulma/css/bulma.css';
import './index.css';

let store = createStore(wizardApp);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>
    ,document.getElementById('root'));
