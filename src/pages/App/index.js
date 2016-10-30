import React, { Component } from 'react';
import styles from './index.css'
import classnames from 'classnames'

import NavigationLink from 'components/NavigationLink'


export default class App extends Component {
  componentDidMount(){
  }
  render(){
    return (
      <div className={styles.container}>
        <h1>Liam's Personal Website</h1>
        <ul role="nav">
          <li><NavigationLink to="/" onlyActiveOnIndex>Home</NavigationLink></li>
          <li><NavigationLink to="/code">Code Examples</NavigationLink></li>
          <li><NavigationLink to="/about">About</NavigationLink></li>
          <li><a href="https://www.liamthanrahan.wordpress.com">Creative Writing Blog</a></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
