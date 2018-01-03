import React from 'react';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './static/css/main.scss';
import Routers from './routes/index';
import configureStore from './store/configureStore';
const store = configureStore();

const Root = () => (
    <Provider store={store}>
      <Routers/>
    </Provider>
);

export default Root;
