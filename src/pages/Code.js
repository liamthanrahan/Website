import React, { Component } from 'react'
import { Link } from 'react-router'
import NavigationLink from 'components/NavigationLink'

import styles from './index.css'


export default class extends Component {
  render() {
    return (
      <div>
        <h2>Code Examples</h2>
        <ul>
          <li>
            <NavigationLink to="/code/parallax">Parallax</NavigationLink>
          </li>
        </ul>
      </div>
    )
  }
}
