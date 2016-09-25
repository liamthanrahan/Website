import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.name}</h2>
      </div>
    )
  }
}
