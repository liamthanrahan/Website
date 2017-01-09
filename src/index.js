import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import './index.css'

import App from './pages/app'
import About from './pages/about'
import Code from './pages/code'
import Example from './pages/example'
import Home from './pages/home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/code" component={Code}/>
      <Route path="/about" component={About}/>
    </Route>
    <Route path="/code/:name" component={Example}/>
  </Router>
), document.getElementById('root'));
