import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import parkingSearch from './parking/parkingSearch';

import thunk from 'redux-thunk';

const reudcer = combineReducers({
  parkingSearch
})




const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reudcer, composeEnhancers(applyMiddleware(thunk)));

export default store;



