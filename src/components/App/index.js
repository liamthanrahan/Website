import React, { Component } from 'react';
import styles from './index.css'
import classnames from 'classnames'

export class App extends Component {
  state = {
  }
  render(){
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <div className={styles.title}>Liam Hanrahan's Website</div>
        </div>
      </div>
    )
  }
}