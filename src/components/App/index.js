import React, { Component } from 'react';
import styles from './index.css'
import classnames from 'classnames'

import NavigationLink from 'NavigationLink'


export class App extends Component {
  state = {
  }
  componentDidMount(){
  }
  render(){
    return (
      <div className={styles.container}>
        <h1>Liam's Personal Website</h1>
        <ul role="nav">
          <li><NavigationLink to="/" onlyActiveOnIndex>Home</NavigationLink></li>
          <li><NavigationLink to="/code">Code Examples</NavigationLink></li>
          <li><NavigationLink to="/repos">Repos</NavigationLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
