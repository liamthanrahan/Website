import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import './index.css'

import About from './pages/About'
import App from './pages/App'
import Code from './pages/Code'
import Example from './pages/Example'
import Home from './pages/Home'

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
