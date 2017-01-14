import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './index.css'

class NavigationLink extends Component {
  render() {
    return <Link {...this.props}
      className={styles.link}
      activeClassName={styles.active} />
  }
}

export default NavigationLink
