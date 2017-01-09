import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './index.css'


export default class extends Component {
  render() {
    return (
      <div>
        <h1>Code Examples</h1>
        <ul>
          <li>
            <Link to="/code/parallax">Parallax</Link>
          </li>
        </ul>
      </div>
    )
  }
}
