import React, { Component } from 'react'

export const makeLoaded = (component) => {
  return class Loaded extends Component {
    componentDidMount(){
      if (this.props.load && typeof this.props.load == 'function'){
        this.props.load()
      }
    }
    render(){
      let { load, ...rest } = this.props
      return React.createElement(component, rest)
    }
  }
}