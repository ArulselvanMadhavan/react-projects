import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';
import {Router,Route,hashHistory} from 'react-router';
import App from './components/App';
import {ResultsContainer} from './components/Results';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
require('./style.css');
import {setState} from './action_creators.js';
import remoteActionMiddleware from './remote_action_middleware';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', (state) =>
  store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch({
    type:'SET_STATE',
    state:{
        vote:{
            pair:['Sunshine','28 Days Later'],
            tally:{Sunshine:2}
        }
    }
});

const routes = <Route component={App}>
    <Route path="/" component={VotingContainer}/>
    <Route path="/results" component={ResultsContainer} />
</Route>

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app'));
