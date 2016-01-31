import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { IndexRoute, Route, Link } from 'react-router'
import { reduxReactRouter, routerStateReducer, ReduxRouter, pushState } from 'redux-router'
import { createHistory, useBasename } from 'history'

import './index.css'
import { App } from 'App'
import reducer from 'logic'

let middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({router:routerStateReducer,app:reducer})

// let basename = window.location.pathname.replace(/\/$/,'')
// console.log('basename', basename)
const store = compose(middleware,reduxReactRouter({createHistory}))(createStore)(rootReducer)

// this is a fancy thing. We set our server to replace host/path with
// host/#!path then when we load, we grab that path and gothere in code
let path = window.location.hash.replace('#!','')
if (path){
  // use a setTimeout, otherwise assets will load from our new path!
  setTimeout(() => {
    store.dispatch(pushState(null, path))
  }, 1)
}

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));