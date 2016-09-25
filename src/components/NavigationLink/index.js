import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './index.css'

export default class extends Component {
  render() {
    return <Link {...this.props} activeClassName={styles.active}/>
  }
}
