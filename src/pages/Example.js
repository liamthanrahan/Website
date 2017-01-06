import React, { Component } from 'react'
import NavigationLink from 'components/NavigationLink'
import Parallax from 'ParallaxExample'
import styles from './index.css'

export default class extends Component {
  render() {
    const { name } = this.props.params
    let example
    switch (name) {
      case 'parallax':
        example = <Parallax />
        break;
      default:
        example = name
    }

    return (
      <div className={styles.fullpage}>
        <div className={styles.topright}>
          <div className={styles.link}>
            <NavigationLink to="/code">Back</NavigationLink>
          </div>
        </div>
        {example}
      </div>
    )
  }
}
