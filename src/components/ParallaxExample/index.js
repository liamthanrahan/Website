import React, { Component } from 'react';
import styles from './index.css'
import classnames from 'classnames'
import p from 'parallax.min.js'


export default class ParallaxExample extends Component {
  componentDidMount(){
    let parallax = new Parallax(this.refs.scene);
  }
  render(){
    return (
      <div className={styles.container}>        
        <ul id="scene" className={styles.fullscreen} ref="scene">
          <li className={classnames("layer", styles.fullscreen)} data-depth="0.10"><div className={styles.background} ></div></li>
          <li className={classnames("layer", styles.fullscreen)} data-depth="0.10"><div className={styles.darkAmbience} ></div></li>
          <li className={classnames("layer", styles.fullscreen)} data-depth="1.00"><img className={styles.absoluteLeft} style={{width: 500}} src={require('../../../images/framed_bohm.png')} /></li>
          <li className={classnames("layer", styles.fullscreen)} data-depth="1.00"><img className={styles.absoluteCenter} style={{width: 500}} src={require('../../../images/framed_bohm.png')} /></li>
          <li className={classnames("layer", styles.fullscreen)} data-depth="1.00"><img className={styles.absoluteRight} style={{width: 500}} src={require('../../../images/framed_bohm.png')} /></li>
        </ul>
      </div>
    )
  }
}
