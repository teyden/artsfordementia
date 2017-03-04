import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './components/app'
import Home from './components/home'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import promise from 'redux-promise'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
  , document.querySelector('.container'));
