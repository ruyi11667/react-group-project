import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import {combineReducers} from "redux-immutable";
import parkingSearch from './parking/parkingSearch';
import user from "./user";

import thunk from 'redux-thunk';

const reudcer = combineReducers({
  parkingSearch,
  user
})




const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reudcer, composeEnhancers(applyMiddleware(thunk)));

export default store;



