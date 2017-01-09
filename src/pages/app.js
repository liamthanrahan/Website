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
        <div className={styles.header}>
          <h1 className={styles.title}>Liam Hanrahan</h1>
          <ul role="nav" className={styles.navigation}>
            <li><NavigationLink to="/" onlyActiveOnIndex>Home</NavigationLink></li>
            <li><NavigationLink to="/code">Code Examples</NavigationLink></li>
            <li><NavigationLink to="/about">About</NavigationLink></li>
            <li><a className={styles.externalLink} href="https://www.liamthanrahan.wordpress.com">Creative Writing Blog</a></li>
          </ul>
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
