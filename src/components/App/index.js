import React, { Component } from 'react';
import styles from './index.css'
import classnames from 'classnames'

// import Parallax from 'parallax.min.js'

export class App extends Component {
  state = {
  }
  // componentDidMount(){
  //   let parallax = new Parallax(this.refs.scene);
  // }
  render(){
    return (
      <div className={styles.app}>        
        <div className={styles.header}>
          <div className={styles.title}>Liam Hanrahan's Website</div>
        </div>
        <div>
          <ul id="scene" ref="scene">
            <li className="layer" data-depth="0.40"><img style={{width: 500}} src={require('../../../images/framed_bohm.png')} /></li>
          </ul>
        </div>
      </div>
    )
  }
}


// <img src={require('../../../images/bohmsface.jpg')} style={{width: '100%', height: '100%'}} />
// <ul id="scene">
//             <li class="layer" data-depth="0.00"><img src="images/arab_tile.png" /></li>
//             <li class="layer" data-depth="0.10"><img src="images/framed_bohm.png" /></li>
//           </ul>